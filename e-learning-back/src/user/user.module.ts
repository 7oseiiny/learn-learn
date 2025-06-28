import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductModule } from 'src/product/product.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/review/review.entity';
import { ReviewModule } from 'src/review/review.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [ 
    forwardRef(() => ProductModule) ,
    forwardRef(() => ReviewModule) ,
    TypeOrmModule.forFeature([User,Review])
  ]
})
export class UserModule {}
