import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './role.schema';
import { Model } from 'mongoose';
import { CreateRoleDto, UpdateRoleDto } from './dtos/role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectModel(Role.name)
        private readonly RoleModel: Model<Role>
    ) {}
    async createRole(createRoleDto :CreateRoleDto ) {
        try {
            const role = await this.RoleModel.create(createRoleDto);
            return role;
        } catch (error) { 
            throw new NotAcceptableException('Role already exists');
        }
    }
    async updateRole(name :string ,updateRoleDto: UpdateRoleDto) {
        try {
            const role = await this.RoleModel.findOneAndUpdate(
                {name:name}, 
                updateRoleDto,
                { new: true }
            );
            if (!role) {
                throw new NotFoundException('Role not found');
            }
            return role;
        } catch (error) {
            throw new NotAcceptableException('Error updating role');
        }
    }
    async getRoleByName(name: string) {
        const role = await this.RoleModel.findOne({ name: name });
        if (!role) {
            throw new NotFoundException('Role not found');
        }   
        return role;
    }
    async getRoleById(id: string) {
        const role = await this.RoleModel.findById(id);
        if (!role) {
            throw new NotFoundException('Role not found');
        }   
        return role;
    }
}
