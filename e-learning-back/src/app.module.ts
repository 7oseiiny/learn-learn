import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { Review } from './review/review.entity';
import { Product } from './product/product.entity';

@Module({
  imports: [
    UserModule,
    ProductModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('BD_NAME'),
        entities: [User,Review,Product],
        synchronize: process.env.NODE_ENV === 'development',
      }),
    }),
    ConfigModule.forRoot({isGlobal: true, envFilePath: `.env.${process.env.NODE_ENV || 'development'}`}),
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
