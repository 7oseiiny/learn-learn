import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './dtos/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private readonly UserModule: Model<Product>
    ) {}
    async getProducts() {
        const products = await this.UserModule.find();
        return products;
    }
    async createProduct(createProductDto: CreateProductDto) {
        const product = await this.UserModule.create(createProductDto);
        return product;
    }
    async getProductById(id: string) {
        const product = await this.UserModule.findById(id);
        return product;
    }
    
}
