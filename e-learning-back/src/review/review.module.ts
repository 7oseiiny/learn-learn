import { forwardRef, Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
  imports: [
    forwardRef(() => ProductModule),
    forwardRef(() => UserModule),
  ],
})
export class ReviewModule { }
