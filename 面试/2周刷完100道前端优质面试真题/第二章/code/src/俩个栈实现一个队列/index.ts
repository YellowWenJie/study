/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 12:37:09
 * @LastEditTime: 2022-07-25 19:21:55
 */
export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  // 入队
  add(n: number): void {
    this.stack1.push(n)
  }

  // 出队
  delete(): number | null {
    let res
    const stack1 = this.stack1
    const stack2 = this.stack2

    // 将 stack1 所有元素移动到 stack2 中
    while (stack1.length) {
      const n = stack1.pop()
      if (n !== null && n !== undefined) {
        stack2.push(n)
      }
    }

    res = stack2.pop()
    while (stack2.length) {
      const n = stack2.pop()
      if (n !== null && n !== undefined) {
        stack1.push(n)
      }
    }
    return res || null
  }

  get length(): number {
    return this.stack1.length
  }
}
