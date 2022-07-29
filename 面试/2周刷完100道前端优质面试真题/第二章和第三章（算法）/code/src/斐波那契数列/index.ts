/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 20:13:15
 * @LastEditTime: 2022-07-26 22:14:25
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}

export function fibonacci2(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1
  let n1 = 1 // 记录 n - 1 的结果
  let n2 = 0 // 记录 n - 2 的结果
  let res = 0

  for (let i = 2; i <= n; i++) {
    n2 = n1
    n1 = res
  }

  return res
}

// leetCode 答案
var fib = function (n: number): number {
  const MOD = 1000000007
  if (n < 2) {
    return n
  }
  let p = 0,
    q = 0,
    r = 1
  for (let i = 2; i <= n; ++i) {
    p = q
    q = r
    r = (p + q) % MOD
  }
  return r
}
