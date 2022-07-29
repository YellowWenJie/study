/*
 * @Author: 黄文杰
 * @Date: 2022-07-27 16:37:37
 * @LastEditTime: 2022-07-27 16:44:36
 */
import { quickSort1, quickSort2 } from './index'

describe('快速排序 splice', () => {
  it('正常情况', () => {
    const arr = [4, 3, 2, 5, 7, 9, 1, 8, 6]
    const res = quickSort1(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('有负数', () => {
    const arr = [-1, 2, -3, 4, -5, 6]
    const res = quickSort1(arr)
    expect(res).toEqual([-5, -3, -1, 2, 4, 6])
  })
  it('数组元素都一样', () => {
    const arr = [6, 6, 6, 6, 6, 6]
    const res = quickSort1(arr)
    expect(res).toEqual([6, 6, 6, 6, 6, 6])
  })
  it('空数组', () => {
    const arr: number[] = []
    const res = quickSort1(arr)
    expect(res).toEqual([])
  })
})

describe('快速排序 slice', () => {
  it('正常情况', () => {
    const arr = [4, 3, 2, 5, 7, 9, 1, 8, 6]
    const res = quickSort2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('有负数', () => {
    const arr = [-1, 2, -3, 4, -5, 6]
    const res = quickSort2(arr)
    expect(res).toEqual([-5, -3, -1, 2, 4, 6])
  })
  it('数组元素都一样', () => {
    const arr = [6, 6, 6, 6, 6, 6]
    const res = quickSort2(arr)
    expect(res).toEqual([6, 6, 6, 6, 6, 6])
  })
  it('空数组', () => {
    const arr: number[] = []
    const res = quickSort2(arr)
    expect(res).toEqual([])
  })
})
