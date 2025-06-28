import { IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsString()
    id: number;
    
    @IsString()
    user: string;

    @IsString()
    email: string;

    @IsString()
    pass: string;
}

export class CreateUserDto {
    @IsString()
    user: string;

    @IsString()
    email: string;

    @IsString()
    pass: string;
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    user?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    pass?: string;
}
