import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MYSQL } from '../../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot(), // 引入 .env 文件
    TypeOrmModule.forRoot(MYSQL), // MySql
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
