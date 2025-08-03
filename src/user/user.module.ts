import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductModule } from 'src/product/product.module';
import { User, UserSchema } from './user.schema';
import { ReviewModule } from 'src/review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModule } from 'src/role/role.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    RoleModule,
    forwardRef(() => ProductModule),
    forwardRef(() => ReviewModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MulterModule.register(
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
          }
        })
      }
    )
  ]
})
export class UserModule { }
