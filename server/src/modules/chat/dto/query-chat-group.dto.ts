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
import { Transform, Type, plainToInstance } from 'class-transformer';
import { ChatGroup } from '../entities/chat.group.entity';
export class SortChatGroupDto {
  @ApiProperty()
  @IsString()
  orderBy: keyof ChatGroup;

  @ApiProperty()
  @IsString()
  order: string;
}

export class FilterChatGroupDto {
  @ApiProperty({ example: 'some substring of title...' })
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @ApiProperty({ example: [1] })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  members?: number[];
}

export class QueryChatGroupDto {
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
    value ? plainToInstance(FilterChatGroupDto, JSON.parse(value)) : undefined
  )
  @ValidateNested()
  @Type(() => FilterChatGroupDto)
  filters: FilterChatGroupDto;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(SortChatGroupDto, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortChatGroupDto)
  sort?: SortChatGroupDto[] | null;
}
