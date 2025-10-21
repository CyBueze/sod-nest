import { Controller, Get, Render } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Get("login")
  @Render("pages/login")
  async getLoginPage(){
    return this.authService.getLoginPage()
  }
  
}
