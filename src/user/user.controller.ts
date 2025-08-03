import { Body, Controller, Get, Param, Headers, Post, UseGuards, Req, SetMetadata, UseInterceptors, ClassSerializerInterceptor, Put, UploadedFile, Delete, Res } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { uploadFile } from 'src/utils/interceptors/uploads-file.interceptor';
import { Response } from 'express';
import { ApiBody, ApiConsumes, ApiSecurity } from '@nestjs/swagger';
import { Authenticated } from 'src/auth/guards/Authenticated';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) { }

    @Get()
    @Authenticated('getpass')
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }


    @Get('current-user')
    @Authenticated()
    getCurrentUser(@CurrentUser() user: any) {
        return this.userService.getCurrentUser(user.userId)
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }

    @Put()
    @Authenticated()
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: { type: 'string', format: 'binary'},
                username: { type: 'string',example: 'ahmed' },
                email: { type: 'string',example:'ahmedelhoseiny5555@gmail.com' },
                role: { type: 'string',example: 'admin' },
            },
            required: [],
        },
    })
    updateCurrentUser(
        @UploadedFile() file: Express.Multer.File,
        @Body() updateUserDto: UpdateUserDto,
        @CurrentUser() user: any
    ) {
        return this.userService.updateCurrentUser(user.userId, updateUserDto , file);
    }

    @Get('image-user/:filename')
    @Authenticated()
    getProfilePicture(@Param('filename') filename: string , @Res() res: Response) {
        return this.userService.getProfilePicture(filename , res);
    }
}