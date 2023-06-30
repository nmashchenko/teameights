import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

import { ValidationException } from '@/exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
		const obj = plainToClass(metadata.metatype, value);
		const errors = await validate(obj);

		if (errors.length) {
			const messages = errors.map(err => {
				if (err.children && err.children.length > 0) {
					return err.children.map(childErr =>
						this.formatErrorMessage(childErr),
					);
				} else {
					return this.formatErrorMessage(err);
				}
			});
			throw new ValidationException(messages);
		}
		return value;
	}

	private formatErrorMessage(error: ValidationError): string {
		const constraints = error.constraints;
		if (constraints) {
			return `${error.property} - ${Object.values(constraints).join(
				', ',
			)}`;
		}
		return 'Wrong object passed, check fields in documentation: server/api/docs';
	}
}
