import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
     constructor(private productService: ProductService) {}
     
     @Get()
     getProducts() {
         return this.productService.getProducts();
     }
     @Post()
     createProduct(@Body() createProductDto: CreateProductDto) {
         return this.productService.createProduct(createProductDto);
     }
     @Get(':id')
     getProductById(@Param('id') id: string) {
         return this.productService.getProductById(id);
     }
}
