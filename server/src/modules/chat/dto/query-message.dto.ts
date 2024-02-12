import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Message } from '../entities/message.entity';
import { Transform, Type, plainToInstance } from 'class-transformer';

export class SortMessageDto {
  @ApiProperty()
  @IsString()
  orderBy: keyof Message;

  @ApiProperty()
  @IsString()
  order: string;
}

export class FilterMessageDto {
  @ApiProperty({ example: 'some substring of text...' })
  @IsOptional()
  @IsNotEmpty()
  text?: string;

  //@ApiProperty()
  //@IsOptional()
  //@IsNotEmpty()
  //read?: string;

  @ApiProperty({ examples: [1, 2] })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  receivers?: number[];
}

export class QueryMessageDto {
  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page: number;

  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit: number;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(FilterMessageDto, JSON.parse(value)) : undefined
  )
  @ValidateNested()
  @Type(() => FilterMessageDto)
  filters: FilterMessageDto;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(SortMessageDto, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortMessageDto)
  sort?: SortMessageDto[] | null;
}
