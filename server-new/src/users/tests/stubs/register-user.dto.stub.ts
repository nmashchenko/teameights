import { RegisterUserDto } from '@/users/dto/register-user.dto';

export const RegisterUserDtoStub = (email: string): RegisterUserDto => {
	return {
		email: email,
		password: 'testuser',
		repeatPassword: 'testuser',
	};
};
