import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { AllConfigType } from 'src/config/config.type';
import { S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class FilesService {
  constructor(
    private readonly configService: ConfigService<AllConfigType>,
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    @Inject(S3Client) private readonly s3Client: S3Client // Inject S3Client
  ) {}

  async uploadFile(file: Express.Multer.File | Express.MulterS3.File): Promise<FileEntity> {
    console.log(file);
    if (!file) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            file: 'selectFile',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const path = {
      local: `/${this.configService.get('app.apiPrefix', { infer: true })}/v1/${file.path}`,
      s3: (file as Express.MulterS3.File).location,
    };

    return this.fileRepository.save(
      this.fileRepository.create({
        path: path[this.configService.getOrThrow('file.driver', { infer: true })],
      })
    );
  }

  async assignRandomUserImage(): Promise<FileEntity> {
    const availableImages = [
      'https://teameights.s3.amazonaws.com/static/user-blue.png',
      'https://teameights.s3.amazonaws.com/static/user-green.png',
      'https://teameights.s3.amazonaws.com/static/user-orange.png',
      'https://teameights.s3.amazonaws.com/static/user-pink.png',
      'https://teameights.s3.amazonaws.com/static/user-purple.png',
      'https://teameights.s3.amazonaws.com/static/user-red.png',
      'https://teameights.s3.amazonaws.com/static/user-yellow.png',
    ];

    // Select a random image
    const randomImageFilename = availableImages[Math.floor(Math.random() * availableImages.length)];

    const randomImage = await this.fileRepository.findOne({
      where: { path: randomImageFilename },
    });

    if (!randomImage) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          errors: {
            file: 'image not found, probably DB is not seeded with initial images.',
          },
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return randomImage;
  }
}
