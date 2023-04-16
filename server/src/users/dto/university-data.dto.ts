import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class UniversityDataDto {
	@ApiProperty({ example: 'UIC', description: 'User university name' })
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly university: string;

	@ApiProperty({
		example: `Bachelor's degree`,
		description: 'Type of degree',
	})
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly degree: string;

	@ApiProperty({ example: `CS`, description: 'Name of major' })
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly major: string;

	@ApiProperty({
		example: `2016-05-18T14:10:30Z`,
		description: 'Addmission in UTC',
	})
	@IsDate()
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDefined()
	readonly addmissionDate: Date;

	@ApiProperty({
		example: `2016-05-18T14:10:30Z`,
		description: 'Graduation in UTC',
	})
	@IsString({ message: 'Should be string' })
	@IsNotEmpty({ message: 'Should not be empty' })
	@IsDate()
	@IsDefined()
	readonly graduationDate: Date;
}
