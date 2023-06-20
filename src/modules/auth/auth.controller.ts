import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  @UsePipes(ValidationPipe)
  register(@Body() authDto: RegisterDto) {
    return this.authService.register(authDto)
  }

  @Public()
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('logout')
  logout() {
    return this.authService.logout()
  }

}
