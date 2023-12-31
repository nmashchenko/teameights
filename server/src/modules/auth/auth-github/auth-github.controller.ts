import { Body, Controller, HttpCode, HttpStatus, Post, SerializeOptions } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/base/auth.service';
import { LoginResponseType } from 'src/modules/auth/base/types/login-response.type';
import { AuthGithubService } from './auth-github.service';
import { AuthGithubLoginDto } from './dto/auth-github-login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller({
  path: 'auth/github',
  version: '1',
})
export class AuthGithubController {
  constructor(
    private readonly authService: AuthService,
    private readonly authGithubService: AuthGithubService
  ) {}

  @SerializeOptions({
    groups: ['me'],
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthGithubLoginDto): Promise<LoginResponseType> {
    const socialData = await this.authGithubService.getProfileByCode(loginDto);

    return this.authService.validateSocialLogin('github', socialData);
  }
}
