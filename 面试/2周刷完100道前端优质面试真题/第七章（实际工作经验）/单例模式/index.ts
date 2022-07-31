/*
 * @Author: 黄文杰
 * @Date: 2022-07-31 16:22:32
 * @LastEditTime: 2022-07-31 16:44:38
 */
class SingleTon {
  private static instance: SingleTon | null = null
  private constructor() {}

  public static getInstance(): SingleTon {
    if (this.instance == null) {
      this.instance = new SingleTon()
    }
    return this.instance
  }
}
