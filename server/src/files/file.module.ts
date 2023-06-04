import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { FileService } from './file.service';

@Module({
	imports: [
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 3,
		}),
	],
	providers: [
		FileService,
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard,
		},
	],
	exports: [FileService],
})
export class FileModule {}
