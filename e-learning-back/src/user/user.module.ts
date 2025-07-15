import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductModule } from 'src/product/product.module';
import { User, UserSchema } from './user.schema';
import { ReviewModule } from 'src/review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModule } from 'src/role/role.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    RoleModule,
    forwardRef(() => ProductModule),
    forwardRef(() => ReviewModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})
export class UserModule { }
