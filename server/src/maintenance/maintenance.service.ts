import { RegisterUserDto } from '@/users/dto/register-user.dto';
import { UsersService } from '@/users/users.service';
import { Inject, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { UpdateUserDto } from '@/users/dto/update-user.dto';
import { performance } from 'perf_hooks';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { RolesService } from '@/roles/roles.service';

@Injectable()
export class MaintenanceService {
	constructor(
		private usersService: UsersService,
		@Inject(getConnectionToken()) private readonly connection: Connection,
		private rolesService: RolesService,
	) {}

	programmingLanguages: string[] = [
		'JS',
		'C++',
		'C',
		'Python',
		'Swift',
		'Ruby',
		'Scala',
		'PHP',
		'Go',
		'C#',
		'Java',
		'HTML/CSS',
		'Dart',
		'Perl',
		'SQL',
	];

	frameworks: string[] = [
		'NodeJS',
		'Ruby',
		'Angular',
		'Android',
		'IOS',
		'Hadoop',
		'Ember',
		'Django',
		'Redux',
		'React',
		'Spring',
		'Spark',
		'Backbone',
		'Figma',
		'Photoshop',
	];

	private getRandomEntries(arr: string[]): string[] {
		const numEntries = Math.floor(Math.random() * 7) + 1;
		const shuffled = arr.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, numEntries);
	}

	private generateInitialUser(): RegisterUserDto {
		const dto = new RegisterUserDto();
		type RemoveReadonly = {
			-readonly [key in keyof RegisterUserDto]: RegisterUserDto[key];
		};

		let initialUser: RemoveReadonly = dto;

		initialUser.email = faker.internet.email();
		initialUser.password = faker.internet.password();
		initialUser.repeatPassword = initialUser.password;

		return dto;
	}

	private updateGeneratedUser(email: string): UpdateUserDto {
		const dto = new UpdateUserDto();
		type RemoveReadonly = {
			-readonly [key in keyof UpdateUserDto]: UpdateUserDto[key];
		};

		let initialUser: RemoveReadonly = dto;
		initialUser.email = email;
		initialUser.username = faker.internet.userName();
		initialUser.fullName = faker.name.fullName();
		initialUser.age = String(faker.datatype.number({ min: 18, max: 65 }));
		initialUser.description = faker.lorem.sentence();
		initialUser.concentration = faker.name.jobTitle();
		initialUser.country = faker.address.country();
		initialUser.experience = `${faker.datatype.number({
			min: 0,
			max: 10,
		})}-${faker.datatype.number({ min: 1, max: 10 })} years`;
		initialUser.isLeader = faker.datatype.boolean();
		initialUser.links = {
			github: 'https://github.com',
			linkedIn: 'https://www.linkedin.com/',
			instagram: 'https://www.instagram.com/',
			telegram: 'https://www.telegram.com/',
		};
		initialUser.programmingLanguages = this.getRandomEntries(
			this.programmingLanguages,
		);
		initialUser.frameworks = this.getRandomEntries(this.frameworks);
		initialUser.university = faker.random.words(2);
		initialUser.major = faker.random.words(2);
		initialUser.graduationDate = faker.date.future().toISOString();

		return initialUser;
	}

	async generateUsers(amount: number): Promise<Object> {
		let startTime = performance.now();

		const roleCheck = await this.rolesService.getRoleByValue('USER');

		if (!roleCheck) {
			await this.rolesService.createRole({
				value: 'USER',
				description: 'Default use role',
			});
		}

		for (let i = 0; i < amount; i++) {
			let newUser = this.generateInitialUser();
			const user = await this.usersService.createUser(newUser);
			const update = this.updateGeneratedUser(user.email);
			await this.usersService.updateUser(update);
		}

		let endTime = performance.now();

		return {
			status: `generated ${amount} users and took ${
				endTime - startTime
			} milliseconds`,
		};
	}

	async dropDatabase() {
		let startTime = performance.now();

		await this.connection.dropDatabase();

		let endTime = performance.now();

		return {
			status: `dropped successfuly and took ${
				endTime - startTime
			} milliseconds`,
		};
	}
}
