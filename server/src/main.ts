import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
// import { JwtAuthGuard } from "./auth/jwt-auth.guard";
// import { ValidationPipe } from "./pipes/validation.pipe";
import cookieParser from 'cookie-parser';
import { AsyncApiDocumentBuilder, AsyncApiModule } from 'nestjs-asyncapi';

import { AppModule } from './app.module';

async function start(): Promise<void> {
	try {
		const PORT = process.env.PORT || 5001;

		const app = await NestFactory.create(AppModule);

		// checking cors
		app.enableCors({
			credentials: true,
			origin: process.env.CLIENT_URL,
		});

		app.use(bodyParser.json({ limit: '10mb' }));
		app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

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

		const asyncApiOptions = new AsyncApiDocumentBuilder()
			.setTitle('Teameights websockets description')
			.setDescription(
				'Here you will be able to find documentation for all websockets we use in our application',
			)
			.setVersion('1.0')
			.setDefaultContentType('application/json')
			// .addSecurity('user-password', { type: 'userPassword' })
			.addServer('Main server', {
				url: process.env.API_URL,
				protocol: 'socket.io',
			})
			.build();

		const asyncapiDocument = await AsyncApiModule.createDocument(
			app,
			asyncApiOptions,
		);
		await AsyncApiModule.setup('/async-api/docs', app, asyncapiDocument);

		/*
		For the future reference: if we need to globally close access to the application
		(e.g. make it only for authorized users only):

		app.useGlobalGuards(JwtAuthGuard)

		Global pipes:
		(e.g. validation on every endpoint)

		app.useGlobalPipes(new ValidationPipe())
		*/

		await app.listen(PORT, () =>
			console.log(
				`Server started on port: ${PORT}, SWAGGER docs started at ${process.env.API_URL}/api/docs, ASYNC-API started at ${process.env.API_URL}/async-api/docs`,
			),
		);
	} catch (err) {
		console.log(err);
	}
}

start();
