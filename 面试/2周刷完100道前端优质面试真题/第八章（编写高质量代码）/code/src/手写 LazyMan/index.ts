/*
 * @Author: 黄文杰
 * @Date: 2022-08-01 21:30:53
 * @LastEditTime: 2022-08-02 14:00:51
 */
class LazyMan {
  private name: string
  private tasks: Function[] = []

  constructor(name: string) {
    this.name = name

    setTimeout(() => {
      this.next()
    })
  }

  private next() {
    const task = this.tasks.shift()
    if (task) task()
  }

  eat(foot: string) {
    const task = () => {
      console.log(`${this.name} eat ${foot}`)
      this.next()
    }
    this.tasks.push(task)
    return this
  }

  sleep(seconds: number) {
    const task = () => {
      setTimeout(() => {
        this.next()
      }, seconds * 1000)
    }
    this.tasks.push(task)
    return this
  }
}
const a = new LazyMan('@')
