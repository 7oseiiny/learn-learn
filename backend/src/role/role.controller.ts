import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, UpdateRoleDto } from './dtos/role.dto';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.createRole(createRoleDto);
    }

    @Put()
    updateRole(@Body() updateRoleDto: UpdateRoleDto , @Query('name') name: string) {
        
        return this.roleService.updateRole(name , updateRoleDto);
    }

    @Get(':name')
    getRoleByName(@Param('name') name: string) {
        return this.roleService.getRoleByName(name);
    }

}
