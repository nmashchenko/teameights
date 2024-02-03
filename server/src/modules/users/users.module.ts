import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Jobs } from './entities/jobs.entity';
import { Links } from './entities/links.entity';
import { Projects } from './entities/projects.entity';
import { Universities } from './entities/universities.entity';
import { Chat } from '../chat/entities/chat.user.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User, Jobs, Links, Projects, Universities, Chat])],
  controllers: [UsersController],
  providers: [IsExist, IsNotExist, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
