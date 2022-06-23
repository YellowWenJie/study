import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // 引入 .env 文件
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
