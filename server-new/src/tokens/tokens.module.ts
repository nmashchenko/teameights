import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@Auth/auth.module';
import { User, UserSchema } from '@Users/users.schema';
import { Token, TokenSchema } from './tokens.schema';
import { TokensService } from './tokens.service';

@Module({
	providers: [TokensService],
	controllers: [],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
		forwardRef(() => AuthModule),
	],
	exports: [TokensService],
})
export class TokensModule {}
