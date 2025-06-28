import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController { 
    constructor(
        private userService: UserService,
        private readonly configService: ConfigService
    ) {}
    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }
    @Get('/config')
    getConfig() {
        let x=1
        const username = this.configService.get<string>('DB_USERNAME');
        const username1 = process.env.DB_USERNAME;
        const sam = this.configService.get<string>('SAM');
        
        const synchronize = this.configService.get<boolean>('DB_SYNCHORNIZE');
        return {
            username,
            sam
        };
    }
    @Get(':id')
    findById(@Param('id',ParseIntPipe) id: number) {
        return this.userService.findById(id);
    }
    @Put(':id')
    update(@Param('id',ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
        return this.userService.update(id, body);
    }
   
}