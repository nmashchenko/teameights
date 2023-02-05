import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '@Exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
		const obj = plainToClass(metadata.metatype, value);
		const errors = await validate(obj);

		if (errors.length) {
			let messages = errors.map((err) => {
				/* Checking if there are any errors in the children of the error object. If there are, it will return
				the error message. Used for nested objects validation inside the orginial object*/
				return err.children.length === 0
					? `${err.property} - ${Object.values(err.constraints).join(
							', ',
					  )}`
					: err.children.map(
							(err) =>
								`${err.property} - ${Object.values(
									err.constraints,
								).join(', ')}`,
					  );
			});
			throw new ValidationException(messages);
		}
		return value;
	}
}
