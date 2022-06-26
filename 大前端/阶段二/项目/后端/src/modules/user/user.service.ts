import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { ToolsService } from '../../utils/capthca';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    private toolsService: ToolsService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getCode(req: Request, res: Response): Promise<void> {
    const svgCaptcha = await this.toolsService.captche(); //创建验证码
    console.log(req);
    res.send(svgCaptcha.data); //给页面返回一张图片
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const data = await this.userRepository.save(user);
    console.log(data);
    res.json(data);
  }
}
