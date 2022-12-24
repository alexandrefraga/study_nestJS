import { Controller, Request, Post, UseGuards, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    // console.log(req.user);
    // export interface CookieOptions {
    //   maxAge?: number | undefined;
    //   signed?: boolean | undefined;
    //   expires?: Date | undefined;
    //   httpOnly?: boolean | undefined;
    //   path?: string | undefined;
    //   domain?: string | undefined;
    //   secure?: boolean | undefined;
    //   encode?: ((val: string) => string) | undefined;
    //   sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
    // }
    const objJwt = await this.authService.login(req.user);
    console.log(
      'tokens iguais: ',
      objJwt.access_token === objJwt.refresh_token,
    );
    res.cookie('jwt', objJwt.access_token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      path: '/',
    });
    res.cookie('jwt', objJwt.refresh_token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      path: '/refresh',
    });
    return;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    // console.log(req.cookies);
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('refresh')
  async getRefresh(@Request() req, @Res({ passthrough: true }) res: Response) {
    console.log('gerar novo token para: ', req.user);
    const objJwt = await this.authService.login(req.user);
    res.cookie('jwt', objJwt.access_token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      path: '/',
    });
    res.cookie('jwt', objJwt.refresh_token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      path: '/refresh',
    });
    return;
  }
}
