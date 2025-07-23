import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './dtos/user.dto';
import { plainToInstance } from 'class-transformer';
 
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly UserModule: Model<User>
    ) { }
    
    async getUsers() {
        const users = await this.UserModule.find().lean();
        return users;
    }
    async createUser(createUserDto: CreateUserDto) {
        const user = await this.UserModule.create(createUserDto);
        return user
    }
    async getUserById(id: string) {
        const user = await this.UserModule.findById( id );
        return user;
    }
    async getUserByUser(username: string) {
        const userExist = await this.UserModule.findOne({ username });
        return userExist;
    }
    async getCurrentUser(id :string) {
        return await this.UserModule.findById(id).lean();
    }
    


}
