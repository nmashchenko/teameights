import { allowedUpdateUserFields } from './constants/allowed-update-user-fields';

export async function userUpdateValidate(dto: any): Promise<object> {
	// Remove any additional fields from DTO
	const filteredDto = Object.keys(dto)
		.filter(key => allowedUpdateUserFields.includes(key))
		.reduce((obj, key) => {
			obj[key] = dto[key];
			return obj;
		}, {});

	return filteredDto;
}
