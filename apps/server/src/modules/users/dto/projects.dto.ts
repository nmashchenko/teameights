import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ProjectsDto {
  @ApiProperty({
    example: `Teameights`,
    description: 'Project name',
  })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  title: string;

  @ApiProperty({
    example: 'https://teameights.com',
    description: 'Project link',
  })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  @IsUrl()
  link: string;
}
