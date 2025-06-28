import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { CreateReviewDto } from 'src/review/dtos/review.dto';

@Controller('user')
export class UserController { 
    constructor(
        private userService: UserService,
        private readonly configService: ConfigService
    ) {}
   
   
   
}