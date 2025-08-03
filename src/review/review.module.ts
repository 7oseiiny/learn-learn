import { forwardRef, Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './review.schema';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
  imports: [
    forwardRef(() => ProductModule),
    forwardRef(() => UserModule),
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])
  ],
})
export class ReviewModule { }
