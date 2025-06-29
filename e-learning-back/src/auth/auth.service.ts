import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly JwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async register (user: CreateUserDto) {
        const userExist = await this.userService.getUserByUser(user.user);
        if (userExist) { 
            throw new NotFoundException('User already exists');
        }
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(user.pass, salt);

        const newUser = await this.userService.createUser({...user,pass});

        return {
            message: 'User created successfully',
            user: newUser,
        };
    }
        
    async login(body :LoginDto) {
        const userExist =await this.userService.getUserByUser(body.user);
        if (!userExist) {
            throw new NotFoundException('User not found');
        }
        const isMatch = bcrypt.compareSync(body.pass, userExist.pass);
        if (!isMatch) {
            throw new NotFoundException('Invalid credentials');
        }
        const payload = { userId: userExist._id };
        const jwt =await this.JwtService.signAsync(payload)

        if (!jwt) {
            throw new NotFoundException('Error generating token');
        }
        return {
            access_token: jwt,
        };
    }
}
