import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('authcode')
  getCode(@Req() req: Request, @Res() res: Response) {
    return this.userService.getCode(req, res);
  }

  @Post('create')
  createUser(@Body() ) {
    return this.userService.createUser();
  }
}
