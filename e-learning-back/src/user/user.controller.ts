import { Body, Controller, Get, Param, Headers, Post, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('user')
export class UserController { 
    constructor(
        private userService: UserService,
    ) {}
   
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    
    @Get('current-user')
    @UseGuards(AuthGuard)
    getCurrentUser(@CurrentUser() user:any){
        return this.userService.getCurrentUser(user.userId)
    }
    
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }
}