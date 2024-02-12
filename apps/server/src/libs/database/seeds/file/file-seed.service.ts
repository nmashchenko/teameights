import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../../../../modules/files/entities/file.entity';

@Injectable()
export class FileSeedService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>
  ) {}

  async run() {
    const availableImages = [
      'https://teameights.s3.amazonaws.com/static/user-blue.png',
      'https://teameights.s3.amazonaws.com/static/user-green.png',
      'https://teameights.s3.amazonaws.com/static/user-orange.png',
      'https://teameights.s3.amazonaws.com/static/user-pink.png',
      'https://teameights.s3.amazonaws.com/static/user-purple.png',
      'https://teameights.s3.amazonaws.com/static/user-red.png',
      'https://teameights.s3.amazonaws.com/static/user-yellow.png',
    ];

    const countFiles = await this.repository.count();

    if (!countFiles) {
      for (let i = 0; i < availableImages.length; i++) {
        await this.repository.save(
          this.repository.create({
            path: availableImages[i],
          })
        );
      }
    }
  }
}
