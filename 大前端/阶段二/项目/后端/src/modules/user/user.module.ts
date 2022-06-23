import { Module } from '@nestjs/common';
import { ToolsService } from '../../utils/capthca';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ToolsService],
})
export class UserModule {}
