import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { JwtAuthGuard } from "./auth/jwt-auth.guard";
// import { ValidationPipe } from "./pipes/validation.pipe";
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
	try {
		const PORT = process.env.PORT || 5001;

		const app = await NestFactory.create(AppModule);

		// checking cors
		app.enableCors({
			credentials: true,
			origin: process.env.CLIENT_URL,
		});

		app.setGlobalPrefix('/api');
		app.use(cookieParser());
		const config = new DocumentBuilder()
			.setTitle('Teameights backend API')
			.setDescription('REST API Documentation')
			.setVersion('1.0.0')
			.addTag('Teameights')
			.build();

		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('/api/docs', app, document);

		/*
    For the future reference: if we need to globally close access to the application
    (e.g. make it only for authorized users only):

    app.useGlobalGuards(JwtAuthGuard)

    Global pipes:
    (e.g. validation on every endpoint)

    app.useGlobalPipes(new ValidationPipe())
    */

		await app.listen(PORT, () =>
			console.log(`Server started on port: ${PORT}`),
		);
	} catch (err) {
		console.log(err);
	}
}

start();
