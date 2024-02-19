import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileSeedService } from './file-seed.service';
import { FileEntity } from '../../../../modules/files/entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [FileSeedService],
  exports: [FileSeedService],
})
export class FileSeedModule {}
