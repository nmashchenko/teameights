import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/libs/database/metadata/roles/entities/role.entity';
import { RoleSeedService } from './role-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleSeedService],
  exports: [RoleSeedService],
})
export class RoleSeedModule {}
