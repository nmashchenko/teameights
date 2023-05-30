import { allowedUpdateTeamFields } from './constants/allowed-update-team-fields';

export async function teamUpdateValidate(dto: any): Promise<object> {
	// Remove any additional fields from DTO
	const filteredDto = Object.keys(dto)
		.filter(key => allowedUpdateTeamFields.includes(key))
		.reduce((obj, key) => {
			obj[key] = dto[key];
			return obj;
		}, {});

	return filteredDto;
}
