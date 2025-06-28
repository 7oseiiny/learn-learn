import { IsNumber, IsString } from "class-validator";

export class ProductDto {
    @IsString()
    id: number;
    
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;
}

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;
}
