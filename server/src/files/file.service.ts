import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

export enum FileType {
	USERS = 'image/users',
	TEAMS = 'image/teams',
	// More types here
}

@Injectable()
export class FileService {
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
}
