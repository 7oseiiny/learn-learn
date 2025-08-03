import { IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsString()
    id: number;
    
    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    pass: string;

    @IsString()
    role: string;
}

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    pass: string;

    @IsString()
    role: string
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    pass?: string;

    @IsString()
    @IsOptional()
    role: string

    @IsString()
    @IsOptional()
    file?: string;
}
