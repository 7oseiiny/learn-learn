import { Body, Controller, Get, Param, Headers, Post, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';

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
    getCurrentUser(@Req() req:Request){
        const {userId} = req['user'] 
        return this.userService.getCurrentUser(userId)
    }
    
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }
}