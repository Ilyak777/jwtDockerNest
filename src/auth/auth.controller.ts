import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Post('/local/signin')
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('/local/logout')
  logoutLocal() {
    return this.authService.logoutLocal();
  }

  @Post('/local/refresh')
  refreshLocal() {
    return this.authService.refreshLocal();
  }
}
