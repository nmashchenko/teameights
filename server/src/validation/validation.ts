import { validate } from 'class-validator';

import { ValidationException } from '@/exceptions/validation.exception';

export class ManualValidatorHook {
	static async validateDtoByClassValidator(obj: any): Promise<boolean> {
		const res = await validate(obj).then(errors => {
			if (errors.length) {
				const messages = errors.map(err => {
					/* Checking if there are any errors in the children of the error object. If there are, it will return
                    the error message. Used for nested objects validation inside the orginial object*/
					return err.children.length === 0
						? `${err.property} - ${Object.values(err.constraints).join(', ')}`
						: err.children.map(
								err =>
									`${err.property} - ${Object.values(err.constraints).join(
										', ',
									)}`,
						  );
				});
				return messages;
			} else {
				console.log('Validation succeeded');
				return null;
			}
		});

		if (res === null) {
			return true;
		}
		throw new ValidationException(res);
	}
}
