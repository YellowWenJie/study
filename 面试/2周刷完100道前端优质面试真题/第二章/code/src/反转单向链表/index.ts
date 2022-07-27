/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 15:15:53
 * @LastEditTime: 2022-07-25 18:15:52
 */
export interface ILinkListNode {
  value: any
  next?: ILinkListNode
}

/**
 * @description:
 * @param {ILinkListNode} list
 * @return {*}
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode

  while (nextNode) {
    // 第一个元素，删除 next，防止循环引用
    if (curNode && !prevNode) {
      // @ts-ignore
      delete curNode.next
    }

    // 反转指针
    if (curNode && prevNode) {
      // @ts-ignore
      curNode.next = prevNode
    }

    // 整体向后移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = curNode?.next
  }

  curNode!.next = prevNode

  return curNode!
}

/**
 * @description: 将数组变成链表
 * @param {number} arr
 * @return {*}
 */
export function createLinkList(arr: number[]): ILinkListNode {
  const length = arr.length
  if (length === 0) throw new Error('参数不能为空')

  let curNode: ILinkListNode = {
    value: arr[length - 1],
  }

  if (length === 1) return curNode

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    }
  }
  return curNode
}
