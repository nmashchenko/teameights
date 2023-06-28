import {
	DeleteObjectCommand,
	DeleteObjectsCommand,
	ListObjectsCommand,
	PutObjectCommand,
	S3Client,
} from '@aws-sdk/client-s3';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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

	/**
	 * This function creates a file with a unique name and path, uploads it to an S3 bucket, and returns
	 * the URL of the uploaded file.
	 * @param {FileType} type - FileType enum, which specifies the type of file being created (e.g. users,
	 * teams, text)
	 * @param {string} file - The actual file content, either as a string or a base64 encoded string.
	 * @param {string} bucket - The name of the Amazon S3 bucket where the file will be uploaded.
	 * @returns a Promise that resolves to a string which is the URL of the uploaded file on Amazon S3.
	 */
	async createFile(
		type: FileType,
		file: string,
		bucket: string,
	): Promise<string> {
		try {
			let fileExtension = '.jpg';

			switch (type) {
				case FileType.USERS:
				case FileType.TEAMS:
					fileExtension = '.jpg';
					break;
				case FileType.TEXT:
					fileExtension = '.txt';
					break;
				default:
					throw new Error('Invalid file type');
			}

			/* Creating a unique file name and a file path. */
			const fileName = uuid.v4() + fileExtension;

			const key = `${type}/${fileName}`;

			/* If file is string it will convert it to Buffer and then use to write the file */
			const buffer =
				type === FileType.TEXT
					? Buffer.from(file)
					: Buffer.from(file, 'base64');

			await this.uploadToS3(key, buffer, bucket);

			return `https://${bucket}.s3.amazonaws.com/${type}/${fileName}`;
		} catch (err) {
			throw new HttpException(
				err.message,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	/**
	 * This function deletes a file from an S3 bucket using AWS SDK for JavaScript.
	 * @param {string} key - The key is a unique identifier for the object in the S3 bucket. It is used to
	 * retrieve or delete the object from the bucket.
	 * @param {string} bucket - The name of the S3 bucket from which the object needs to be deleted.
	 */
	async removeFromS3(key: string, bucket: string): Promise<void> {
		const params = {
			Bucket: bucket,
			Key: key,
		};

		try {
			console.log(
				await this.s3Client.send(new DeleteObjectCommand(params)),
			);
			console.log(
				`File ${key} successfully deleted from S3 bucket ${bucket}`,
			);
		} catch (error) {
			console.error(
				`Error deleting file ${key} from S3 bucket ${bucket}:`,
				error,
			);
			throw new HttpException(
				`Error deleting file ${key} from S3 bucket ${bucket}`,
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
	async uploadToS3(key: string, file: Buffer, bucket: string): Promise<any> {
		await this.s3Client.send(
			new PutObjectCommand({
				Bucket: bucket,
				Key: key,
				Body: file,
			}),
		);
	}

	/**
	 * This function deletes a folder and its contents from an S3 bucket using the AWS SDK for JavaScript.
	 * @param {string} folderPath - The path of the folder or prefix to be deleted from the S3 bucket.
	 * @param {string} bucket - The name of the S3 bucket from which the folder needs to be deleted.
	 */
	async deleteFolderFromS3(
		folderPath: string,
		bucket: string,
	): Promise<void> {
		const params = {
			Bucket: bucket,
			Prefix: folderPath, // The folder or prefix to be deleted
		};

		try {
			const listObjectsResponse = await this.s3Client.send(
				new ListObjectsCommand(params),
			);

			if (listObjectsResponse.Contents) {
				const deleteObjectsParams = {
					Bucket: bucket,
					Delete: {
						Objects: listObjectsResponse.Contents.map(obj => ({
							Key: obj.Key,
						})),
						Quiet: false,
					},
				};

				await this.s3Client.send(
					new DeleteObjectsCommand(deleteObjectsParams),
				);
				console.log(
					`Folder ${folderPath} and its contents successfully deleted from S3 bucket ${bucket}`,
				);
			} else {
				console.log(
					`Folder ${folderPath} does not exist in S3 bucket ${bucket}`,
				);
			}
		} catch (error) {
			console.error(
				`Error deleting folder ${folderPath} from S3 bucket ${bucket}:`,
				error,
			);
			throw error;
		}
	}
}
