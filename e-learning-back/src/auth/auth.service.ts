import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from 'src/role/role.service';
import { MailModule } from 'src/mail/mail.module';
import { MailerService } from '@nestjs-modules/mailer';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly JwtService: JwtService,
        private readonly userService: UserService,
        private readonly roleService: RoleService,
        private readonly mailService: MailService
    ) { }

    async register(user: CreateUserDto) {
        const userExist = await this.userService.getUserByUser(user.username);
        if (userExist) {
            throw new NotFoundException('User already exists');
        }
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(user.pass, salt);

        const role = await this.roleService.getRoleByName(user.role);
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        user.role = role._id.toString() // Assuming role is an ObjectId in the User schema
        const newUser = await this.userService.createUser({ ...user, pass });

        return {
            message: 'User created successfully',
            user: newUser,
        };
    }

    async login(body: LoginDto) {
        const userExist = await this.userService.getUserByUser(body.username);
        if (!userExist) {
            throw new NotFoundException('User not found');
        }
        const isMatch = bcrypt.compareSync(body.pass, userExist.pass);
        if (!isMatch) {
            throw new NotFoundException('Invalid credentials');
        }
        const payload = { userId: userExist._id, username: userExist.username, role: userExist.role };
        const jwt = await this.JwtService.signAsync(payload)

        if (!jwt) {
            throw new NotFoundException('Error generating token');
        }
        this.mailService.sendLoginNotification()
        return {
            access_token: jwt,
        };
    }
}
