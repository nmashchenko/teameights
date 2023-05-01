import { ApiProperty } from '@nestjs/swagger';
import { Team } from '../teams.schema';

export class Results {
	@ApiProperty({
		description: 'Array of teams that we get on this page',
	})
	data: Array<Team>;
	@ApiProperty({ example: '100', description: 'Total number of teams in DB' })
	total: number;
	@ApiProperty({ example: '2', description: 'Current page' })
	page: number;
	@ApiProperty({ example: '9', description: 'Limit which is always 9' })
	limit: number;
	@ApiProperty({ example: '5', description: 'Teams on current page' })
	on_current_page: number;
	@ApiProperty({ example: '12', description: 'Last page that has teams' })
	last_page: number;
}
