import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { ToolsService } from '../../utils/capthca';

@Injectable()
export class UserService {
  constructor(private toolsService: ToolsService) {}

  async getCode(req: Request, res: Response): Promise<void> {
    const svgCaptcha = await this.toolsService.captche(); //创建验证码
    console.log(req);
    res.send(svgCaptcha.data); //给页面返回一张图片
  }
}
