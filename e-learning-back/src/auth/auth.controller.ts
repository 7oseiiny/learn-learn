import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dtos/user.dto';
import { LoginDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService, 
    ) {}
    @Post('register')
    async register(@Body() body: CreateUserDto) {
        return this.authService.register(body);
    }

    @Post('login')
    login(@Body() body: LoginDto) {
        return this.authService.login(body);
    }
}
