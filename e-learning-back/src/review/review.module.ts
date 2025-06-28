import { forwardRef, Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ProductModule } from 'src/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
  imports: [
    forwardRef(() => ProductModule),
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([Review]), 
  ],
})
export class ReviewModule {}
