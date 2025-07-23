import { Body, Controller, Get, Param, Headers, Post, UseGuards, Req, SetMetadata, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) { }

    @Get()
    @SetMetadata('perms', ['getpass'])
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }


    @Get('current-user')
    @UseGuards(AuthGuard)
    getCurrentUser(@CurrentUser() user: any) {
        return this.userService.getCurrentUser(user.userId)
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }
}