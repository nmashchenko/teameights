import { DynamicModule } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryReplSet, MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: MongoMemoryServer | MongoMemoryReplSet;

export const rootMongooseTestModule = (replSet?: boolean): DynamicModule =>
	MongooseModule.forRootAsync({
		useFactory: async () => {
			if (replSet) {
				mongod = await MongoMemoryReplSet.create({
					replSet: {
						count: 1,
						storageEngine: 'wiredTiger',
					},
				});

				await mongod.waitUntilRunning();
				console.log('running!');
			} else {
				mongod = await MongoMemoryServer.create();
			}
			const mongoUri = mongod.getUri();
			return {
				uri: mongoUri,
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
