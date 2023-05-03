import { ApiProperty } from '@nestjs/swagger';

import { User } from '../users.schema';

export class Results {
	@ApiProperty({
		description: 'Array of users that we get on this page',
	})
	data: Array<User>;
	@ApiProperty({ example: '100', description: 'Total number of users in DB' })
	total: number;
	@ApiProperty({ example: '2', description: 'Current page' })
	page: number;
	@ApiProperty({ example: '9', description: 'Limit which is always 9' })
	limit: number;
	@ApiProperty({ example: '5', description: 'Users on current page' })
	on_current_page: number;
	@ApiProperty({ example: '12', description: 'Last page that has users' })
	last_page: number;
}
