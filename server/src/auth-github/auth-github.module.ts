import { Module } from '@nestjs/common';
import { AuthGithubController } from './auth-github.controller';
import { AuthGithubService } from './auth-github.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [ConfigModule, AuthModule],
  controllers: [AuthGithubController],
  providers: [AuthGithubService],
  exports: [AuthGithubService],
})
export class AuthGithubModule {}
