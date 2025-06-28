import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, ProductDto } from './dtos/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}
    
    findAll() {
        return this.productRepository.find();
    }
    create(body: CreateProductDto) {
        return this.productRepository.save(this.productRepository.create(body));
    }
    async findById(id:number){
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
}
