/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 18:17:52
 * @LastEditTime: 2022-07-26 18:21:29
 */

import { getKthValue } from './index'
describe('二叉搜索树', () => {
  const bst = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
  }

  it('正常情况', () => {
    const res = getKthValue(bst, 3)
    expect(res).toBe(4)
  })

  it('k 不在范围内', () => {
    const res1 = getKthValue(bst, 0)
    expect(res1).toBeNull()

    const res2 = getKthValue(bst, 1000)
    expect(res2).toBeNull()
  })
})
