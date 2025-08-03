import { IsOptional, IsString } from "class-validator";

export class RoleDto {
    @IsString()
    id: string;
    
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString({ each: true })
    permissions: string[];
    
}

export class CreateRoleDto  {

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString({ each: true })
    permissions: string[];
}

export class UpdateRoleDto  {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString({ each: true })
    @IsOptional()
    permissions: string[];
}
