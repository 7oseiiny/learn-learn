import { IsString } from "class-validator";

export class ProductDto {
    @IsString()
    id: number;
    
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    price: number;
}

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    price: number;
}
