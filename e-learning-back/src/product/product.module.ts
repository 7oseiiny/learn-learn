import { forwardRef, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.schema';
import { ReviewModule } from 'src/review/review.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => ProductModule),
    forwardRef(() => ReviewModule),
  ],
})
export class ProductModule { }
