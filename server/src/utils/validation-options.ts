import { HttpException, HttpStatus, ValidationError, ValidationPipeOptions } from '@nestjs/common';

const formatErrors = (errors: ValidationError[]): Record<string, string> => {
  return errors.reduce((acc, error) => {
    if (error.children && error.children.length > 0) {
      acc[error.property] = formatErrors(error.children);
    } else {
      acc[error.property] = Object.values(error.constraints ?? {}).join(', ');
    }
    return acc;
  }, {});
};

const validationOptions: ValidationPipeOptions = {
  transform: true,
  whitelist: true,
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  exceptionFactory: (errors: ValidationError[]) =>
    new HttpException(
      {
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: formatErrors(errors),
      },
      HttpStatus.UNPROCESSABLE_ENTITY
    ),
};

export default validationOptions;
