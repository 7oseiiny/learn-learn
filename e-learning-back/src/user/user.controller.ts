import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
    users:UserDto[]=[
        {
            user: 'JohnDoe',
            email: 'john.doe@example.com',
            pass: 'securepassword',
            id: 0
        },
        {
            user: 'qqq',
            email: 'qqq.doe@example.com',
            pass: 'qqqqqqq',
            id: 1
        }
    ];
    @Get()
    findAll() {
        return this.users;
    }
    @Post()
    create(@Body() body: CreateUserDto) {
        const newUser: UserDto = {
            id: this.users.length + 1,
            ...body
        };
        this.users.push(newUser);
        return newUser;
    }
    @Get(':id')
    findById(@Param('id',ParseIntPipe) id: number) {
        const user = this.users.find(user => user.id === id)
        if(!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}