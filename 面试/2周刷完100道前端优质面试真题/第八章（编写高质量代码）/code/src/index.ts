/*
 * @Author: yellowwenjie yellowwenjie@gmail.com
 * @Date: 2022-07-24 00:36:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-02 15:04:09
 * @FilePath: /第二章/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by yellowwenjie yellowwenjie@gmail.com, All Rights Reserved.
 */
import './手写一个 curry 函数，把其他函数柯里化'

const msg: string = '编写高质量代码'
function getMsg() {
  return 'Study ' + msg
}
// 更新页面的内容
document.body.textContent = getMsg()
