import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { User } from './user/user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RemovePassInterceptor } from './utils/interceptors/user.interceptor';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    MailModule,
    RoleModule,
    UserModule,
    ProductModule,
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: process.env.NODE_ENV !== 'production'? `.env.${process.env.NODE_ENV || 'development'}` : '.env'
    }),
    MongooseModule.forRootAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL', ''),
      }),
    }),
    ReviewModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RemovePassInterceptor,
    },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ClassSerializerInterceptor,
    // },
  ],

})
export class AppModule { }
