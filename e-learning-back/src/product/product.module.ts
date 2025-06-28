import { forwardRef, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Review } from 'src/review/review.entity';
import { User } from 'src/user/user.entity';
import { ReviewModule } from 'src/review/review.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
  imports: [ 
    forwardRef(() => UserModule) ,
    forwardRef(() => ProductModule),
    forwardRef(() => ReviewModule),
    TypeOrmModule.forFeature([Product])
  ],
})
export class ProductModule {}
