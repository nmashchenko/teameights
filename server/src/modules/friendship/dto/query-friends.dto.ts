import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { plainToInstance, Transform, Type } from 'class-transformer';
import { Friendship } from '../entities/friendship.entity';
export class SortFriendshipDto {
  @ApiProperty()
  @IsString()
  orderBy: keyof Friendship;

  @ApiProperty()
  @IsString()
  order: string;
}

export class FilterFriendshipDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  status?: string;
}

export class QueryFriendshipDto {
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
    value ? plainToInstance(FilterFriendshipDto, JSON.parse(value)) : undefined
  )
  @ValidateNested()
  @Type(() => FilterFriendshipDto)
  filters: FilterFriendshipDto;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(SortFriendshipDto, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortFriendshipDto)
  sort?: SortFriendshipDto[] | null;
}
