import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductModule } from 'src/product/product.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [ 
    forwardRef(() => ProductModule) ,
    TypeOrmModule.forFeature([User])
  ]
})
export class UserModule {}
