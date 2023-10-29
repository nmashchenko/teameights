import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { SocialInterface } from 'src/libs/database/metadata/social/interfaces/social.interface';
import { AuthGoogleLoginDto } from './dto/auth-google-login.dto';
import { AllConfigType } from 'src/config/config.type';

@Injectable()
export class AuthGoogleService {
  private google: OAuth2Client;

  constructor(private configService: ConfigService<AllConfigType>) {
    this.google = new OAuth2Client(
      configService.get('google.clientId', { infer: true }),
      configService.get('google.clientSecret', { infer: true }),
      'postmessage'
    );
  }

  async getProfileByToken(loginDto: AuthGoogleLoginDto): Promise<SocialInterface> {
    // issue: https://github.com/MomenSherif/react-oauth/issues/12
    const { tokens } = await this.google.getToken(loginDto.code);
    const ticket = await this.google.verifyIdToken({
      idToken: tokens.id_token || '',
      audience: [this.configService.getOrThrow('google.clientId', { infer: true })],
    });

    const data = ticket.getPayload();

    if (!data) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            user: 'wrongToken',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    return {
      id: data.sub,
      email: data.email,
      firstName: data.given_name,
      lastName: data.family_name,
    };
  }
}
