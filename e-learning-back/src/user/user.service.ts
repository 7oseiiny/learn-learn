import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { join } from 'path';
import { unlink, unlinkSync } from 'fs';
 
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly UserModule: Model<User>
    ) { }
    
    async getUsers() {
        const users = await this.UserModule.find();
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
        return await this.UserModule.findById(id)
    }
    
    async updateCurrentUser(id :string , updateUserDto: UpdateUserDto , file ?: Express.Multer.File) {
        let updateData = { ...updateUserDto };
        file ? updateData.file = file.filename : updateData.file = ''
        this.removeRelatedFile(id,updateData);
        return await this.UserModule.updateOne({ _id: id }, updateData);
    }
    async getProfilePicture(filename: string , res : Response) {
        return res.sendFile(filename, {root: 'uploads'})
    }

    async removeRelatedFile(id: string, updateData: UpdateUserDto) {
        let oldUser = await this.UserModule.findById(id);
        if (oldUser && oldUser.file) {
            try {
                let imagePath = join(process.cwd(), `./uploads/${oldUser.file}`);
                unlinkSync(imagePath);
                updateData.file = '';
                return updateData;
            } catch (error) {
                console.error('Error removing file:', error);
            }
        }
    }

}
