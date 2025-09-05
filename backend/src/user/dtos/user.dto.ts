import { IsOptional, IsString, IsEmail, MinLength, Matches } from "class-validator";


export class UserDto {
    @IsString()
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    pass: string;

    @IsString()
    role: string;
}


export class CreateUserDto {
    @IsString()
    @MinLength(3, { message: 'Name must be at least 3 characters.' })
    name: string;

    @IsEmail({}, { message: 'Invalid email format.' })
    email: string;

    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters.' })
    @Matches(/[A-Za-z]/, { message: 'Password must contain at least one letter.' })
    @Matches(/\d/, { message: 'Password must contain at least one number.' })
    @Matches(/[^A-Za-z\d]/, { message: 'Password must contain at least one special character.' })
    pass: string;

    @IsString()
    role: string;
}


export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    pass?: string;

    @IsString()
    @IsOptional()
    role: string;

    @IsString()
    @IsOptional()
    file?: string;
}
