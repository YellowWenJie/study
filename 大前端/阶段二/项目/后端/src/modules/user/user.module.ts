import { Module } from '@nestjs/common';
import { ToolsService } from '../../utils/capthca';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, ToolsService],
})
export class UserModule {}
