import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
     constructor(private productService: ProductService) {}
        @Get()
        findAll() {
            return this.productService.findAll();
        }
        @Post()
        create(@Body() body: CreateProductDto) {
            return this.productService.create(body);
        }
        @Get(':id')
        findById(@Param('id',ParseIntPipe) id: number) {
            return this.productService.findById(id);
        }
}
