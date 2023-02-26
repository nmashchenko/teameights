import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { disconnect } from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
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

export const closeMongoConnection = async () => {
	await mongoose.disconnect();
	if (mongod) await mongod.stop();
};

export const healthCheck = async () => {
	console.log(mongoose.connections.length);
};
