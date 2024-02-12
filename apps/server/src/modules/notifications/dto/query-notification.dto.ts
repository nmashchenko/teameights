import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { plainToInstance, Transform, Type } from 'class-transformer';
export class SortNotificationDto {
  @ApiProperty()
  @IsString()
  orderBy: keyof Notification;

  @ApiProperty()
  @IsString()
  order: string;
}

export class FilterNotificationDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  type?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  read?: string;
}

export class QueryNotificationDto {
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
    value ? plainToInstance(FilterNotificationDto, JSON.parse(value)) : undefined
  )
  @ValidateNested()
  @Type(() => FilterNotificationDto)
  filters: FilterNotificationDto;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(SortNotificationDto, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortNotificationDto)
  sort?: SortNotificationDto[] | null;
}
