import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class JobsDto {
  @ApiProperty({ example: 'SWE', description: 'Job title' })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  title: string;

  @ApiProperty({
    example: `Spotify`,
    description: 'Company name',
  })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  company: string;

  @ApiProperty({
    example: `2016-05-18`,
    description: 'Start date in UTC',
  })
  @IsDateString()
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  startDate: Date;

  @ApiProperty({
    example: `2017-05-18`,
    description: 'End date in UTC',
  })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDateString()
  @IsDefined()
  @IsOptional()
  endDate?: Date;
}
