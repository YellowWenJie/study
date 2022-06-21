function factorial (n) {
  if (n === 1 || n === 0) {
    return 1
  }
  return n * factorial (n - 1)
}

// 尾调用优化
function newFactorial (n, total = 1) {
  if (n === 1 || n === 0) {
    return total
  }
  return newFactorial(n - 1, total * n)
}
console.log(newFactorial(5))