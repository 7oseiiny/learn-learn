import { IsString } from "class-validator";

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
