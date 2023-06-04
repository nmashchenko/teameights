import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import * as uuid from 'uuid';

export enum FileType {
	USERS = 'image/users',
	TEAMS = 'image/teams',
	TEXT = 'text',
	// More types here
}

@Injectable()
export class FileService {
	private readonly s3Client = new S3Client({
		region: this.configService.getOrThrow('AWS_S3_REGION'),
		credentials: {
			accessKeyId: this.configService.getOrThrow('AWS_ACCESS_KEY'),
			secretAccessKey: this.configService.getOrThrow(
				'AWS_SECRET_ACCESS_KEY',
			),
		},
	});

	constructor(private readonly configService: ConfigService) {}

	async createFile(
		type: FileType,
		file: Express.Multer.File | string,
	): Promise<string> {
		try {
			/* Creating a unique file name and a file path. */
			const fileName = uuid.v4() + '.jpg';
			const filePath = path.resolve(__dirname, '..', 'static', type);

			/* Creating a folder if it doesn't exist and then writing the file to the folder. */
			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath, { recursive: true });
			}

			/* This is checking if the file is a string or not. If it is not a string, then it will use 7bit encoding. */
			if (typeof file !== 'string') {
				fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
				return type + '/' + fileName;
			}

			/* If file is string it will convert it to Buffer and then use to write the file */
			const buffer = Buffer.from(file, 'base64');
			fs.writeFileSync(path.resolve(filePath, fileName), buffer);
			return type + '/' + fileName;
		} catch (err) {
			throw new HttpException(
				err.message,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	/**
	 * It removes a file from the server
	 * @param {string} fileName - The name of the file to be deleted.
	 */
	async removeFile(fileName: string): Promise<void> {
		try {
			const filePath = path.resolve(__dirname, '..', 'static', fileName);
			await fs.promises.unlink(filePath);
		} catch (err) {
			throw new HttpException(
				err.message,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	/**
	 * This function uploads a file to an S3 bucket using the AWS SDK for TypeScript.
	 * @param {string} fileName - A string representing the name of the file that will be uploaded to
	 * Amazon S3.
	 * @param {Buffer} file - `file` is a `Buffer` object that contains the data of the file to be uploaded
	 * to Amazon S3. A `Buffer` is a temporary holding spot for data being moved from one place to another.
	 * In this case, it is being used to hold the file data before it is uploaded
	 */
	async uploadToS3(fileName: string, file: Buffer): Promise<any> {
		await this.s3Client.send(
			new PutObjectCommand({
				Bucket: 't8s-betalist',
				Key: fileName,
				Body: file,
			}),
		);
	}

	/**
	 * Writes a file at a given path via a promise interface.
	 *
	 * @param {string} fileName
	 * @param {string} data
	 *
	 * @return {Promise<void>}
	 */
	createTextFile = async (
		fileName: string,
		data: string,
	): Promise<Buffer> => {
		const filePath = path.resolve(__dirname, '..', 'static', FileType.TEXT);
		/* Creating a folder if it doesn't exist and then writing the file to the folder. */
		if (!fs.existsSync(filePath)) {
			fs.mkdirSync(filePath, { recursive: true });
		}

		const writeFile = promisify(fs.writeFile);

		await writeFile(path.resolve(filePath, fileName), data, 'utf8');

		// Read the file as a buffer
		const readFileAsync = promisify(fs.readFile);
		const buffer = await readFileAsync(path.resolve(filePath, fileName));

		return buffer;
	};
}
