import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController { 
    constructor(private userService: UserService) {}
    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }
    @Get(':id')
    findById(@Param('id',ParseIntPipe) id: number) {
        return this.userService.findById(id);
    }
}