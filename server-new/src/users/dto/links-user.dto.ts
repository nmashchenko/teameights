import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';

export class LinksUserDto {
	@ApiProperty({ example: 'https://github.com', description: 'Github' })
	@IsUrl(
		{ host_whitelist: [/^.*github\.com$/] },
		{ message: 'Should be correct github url' },
	)
	@IsOptional()
	readonly github: string;

	@ApiProperty({ example: 'https://linkedin.com', description: 'LinkedIn' })
	@IsUrl(
		{ host_whitelist: [/^.*linkedin\.com$/] },
		{ message: 'Should be correct linkedin url' },
	)
	@IsOptional()
	readonly linkedIn: string;

	@ApiProperty({ example: 'https://instagram.com', description: 'Instagram' })
	@IsUrl(
		{ host_whitelist: [/^.*instagram\.com$/] },
		{ message: 'Should be correct linkedin url' },
	)
	@IsOptional()
	readonly instagram: string;

	// TODO: Change later
	@ApiProperty({ example: 'https://telegram.com', description: 'Telegram' })
	@IsUrl({}, { message: 'Should be url' })
	@IsOptional()
	readonly telegram: string;
}
