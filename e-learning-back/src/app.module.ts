import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { User } from './user/user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    ProductModule,
    MongooseModule.forRoot('mongodb+srv://admin:itiAmazon@cluster0.ke6bvtv.mongodb.net/nest'),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: `.env.${process.env.NODE_ENV || 'development'}` }),
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
