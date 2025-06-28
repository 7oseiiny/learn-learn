import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
     constructor(private productService: ProductService) {}
     
}
