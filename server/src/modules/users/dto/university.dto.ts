import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UniversityDataDto {
  @ApiProperty({ example: 'UIC', description: 'User university name' })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  university: string;

  @ApiProperty({
    example: `Bachelor's degree`,
    description: 'Type of degree',
  })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  degree: string;

  @ApiProperty({ example: `CS`, description: 'Name of major' })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  major: string;

  @ApiProperty({
    example: `2016-05-18T14:10:30Z`,
    description: 'Addmission in UTC',
  })
  @IsDateString()
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDefined()
  admissionDate: Date;

  @ApiProperty({
    example: `2016-05-18T14:10:30Z`,
    description: 'Graduation in UTC',
  })
  @IsString({ message: 'Should be string' })
  @IsNotEmpty({ message: 'Should not be empty' })
  @IsDateString()
  @IsDefined()
  @IsOptional()
  graduationDate?: Date;
}
