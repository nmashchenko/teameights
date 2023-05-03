import { DynamicModule } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (
	options: MongooseModuleOptions = {},
): DynamicModule =>
	MongooseModule.forRootAsync({
		useFactory: async () => {
			mongod = await MongoMemoryServer.create();
			const mongoUri = mongod.getUri();
			return {
				uri: mongoUri,
				...options,
			};
		},
	});

export const closeMongoConnection = async (): Promise<void> => {
	await mongoose.disconnect();
	if (mongod) await mongod.stop();
};

export const healthCheck = async (): Promise<void> => {
	console.log(mongoose.connections.length);
};
