import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { AuthGithubLoginDto } from './dto/auth-github-login.dto';
import { SocialInterface } from '../social/interfaces/social.interface';
@Injectable()
export class AuthGithubService {
  private readonly clientId?: string;
  private readonly clientSecret?: string;

  constructor(private configService: ConfigService<AllConfigType>) {
    this.clientId = this.configService.getOrThrow('github.clientId', { infer: true });
    this.clientSecret = this.configService.getOrThrow('github.clientSecret', { infer: true });
  }

  async getProfileByCode(loginDto: AuthGithubLoginDto): Promise<SocialInterface> {
    // Exchange code for access token
    const params =
      '?client_id=' +
      this.clientId +
      '&client_secret=' +
      this.clientSecret +
      '&code=' +
      loginDto.code;
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token' + params, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            user: tokenData.error,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Fetch user profile using the access token
    const userResponse = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const user = await userResponse.json();

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          errors: {
            user: 'githubError',
          },
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      id: user?.id,
      email: '',
      firstName: user?.name?.split(' ')[0],
      lastName: user?.name?.split(' ')[1],
    };
  }
}
