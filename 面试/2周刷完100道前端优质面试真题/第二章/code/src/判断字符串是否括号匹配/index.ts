/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 11:28:31
 * @LastEditTime: 2022-07-25 11:56:14
 */

/**
 *  一个字符串 s 可能包含 {} [] () 三种括号
 * 判断 s 是否是括号匹配的
 * 如 (a{b}c) 匹配，而 {a(b 或 {(a}c) 就不匹配
 */

/**
 * @description: 判断左右括号是否匹配
 * @param {string} left
 * @param {string} right
 * @return {*}
 */
function isMatch(left: string, right: string) {
  if (left === '(' && right === ')') return true
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
}

/**
 * @description:
 * @param {string} str
 * @return {boolean}
 */
export function matchBrackets(str: string): boolean {
  const lenght = str.length
  if (lenght === 0) return true

  const stack = []

  const leftSymble = '{[('

  const rightSymble = '}])'

  for (let i = 0; i < lenght; i++) {
    const s = str[i]

    if (leftSymble.includes(s)) {
      stack.push(s)
    } else if (rightSymble.includes(s)) {
      const top = stack[stack.length - 1]

      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

const str = '{1[1(1]]}'
console.log(matchBrackets(str))
