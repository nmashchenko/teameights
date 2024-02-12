import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl, ValidateIf } from 'class-validator';

export class LinksDto {
  @ApiProperty({ example: 'https://github.com', description: 'Github' })
  @IsUrl({ host_whitelist: [/^.*github\.com$/] }, { message: 'Should be correct github url' })
  @IsOptional()
  @ValidateIf(e => e.github !== '') // check only when blank string not found
  github?: string;

  @ApiProperty({ example: 'https://linkedin.com', description: 'LinkedIn' })
  @IsUrl({ host_whitelist: [/^.*linkedin\.com$/] }, { message: 'Should be correct linkedin url' })
  @IsOptional()
  @ValidateIf(e => e.linkedIn !== '') // check only when blank string not found
  linkedIn?: string;

  @ApiProperty({ example: 'https://behance.com', description: 'Behance' })
  @IsUrl(
    { host_whitelist: [/^.*behance\.com$/, /^.*behance\.net$/] },
    { message: 'Should be correct behance url' }
  )
  @IsOptional()
  @ValidateIf(e => e.behance !== '') // check only when blank string not found
  behance?: string;

  // TODO: Change later
  @ApiProperty({ example: 'https://telegram.com', description: 'Telegram' })
  @IsUrl({}, { message: 'Should be url' })
  @IsOptional()
  @ValidateIf(e => e.telegram !== '') // check only when blank string not found
  telegram?: string;
}
