import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, ProductDto } from './dtos/product.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProductService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService
    ) {}
    products: ProductDto[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            price: 200
        }
    ];

    findAll() {
        return this.products;
    }

    create(body: CreateProductDto) {
        const newProduct: ProductDto = {
            id: this.products.length + 1,
            ...body
        };
        this.products.push(newProduct);
        return newProduct;
    }

    findById(id: number) {
        const product = this.products.find(product => product.id === id)
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        return product;
    }
}
