import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
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
        findAll() {
            return this.users;
        }
        create(body: CreateUserDto) {
            const newUser: UserDto = {
                id: this.users.length + 1,
                ...body
            };
            this.users.push(newUser);
            return newUser;
        }
        findById(id: number) {
            const user = this.users.find(user => user.id === id)
            if(!user) {
                throw new NotFoundException('User not found');
            }
            return user;
        }
}
