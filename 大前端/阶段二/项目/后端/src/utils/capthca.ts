import { Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class ToolsService {
  async captche(size = 4) {
    const captcha = svgCaptcha.create({
      // 可配置返回的图片信息
      size, // 生成几个验证码
      fontSize: 50, // 文字大小
      width: 100, // 宽度
      height: 34, // 高度
      color: true, // 字体颜色
      // background: '#' + Math.floor(Math.random() * 16777215).toString(16), //背景颜色
    });
    return captcha;
  }
}
