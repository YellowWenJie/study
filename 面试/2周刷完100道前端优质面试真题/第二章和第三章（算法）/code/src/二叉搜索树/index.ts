/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 16:20:28
 * @LastEditTime: 2022-07-26 18:22:07
 */

interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

const arr: number[] = []

/**
 * @description: 二叉树前序遍历
 * @param {ITreeNode} node
 * @return {*}
 */
function preOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  arr.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * @description: 二叉树中序遍历
 * @param {ITreeNode} node
 * @return {*}
 */
function inOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  inOrderTraverse(node.left)
  arr.push(node.value)
  inOrderTraverse(node.right)
}

/**
 * @description: 二叉树中序遍历
 * @param {ITreeNode} node
 * @return {*}
 */
function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  arr.push(node.value)
}

/**
 * @description: 寻找 bst 二叉搜索树的第 k 小值
 * @param {ITreeNode} node
 * @param {number} k
 * @return {*}
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node)
  return arr[k - 1] || null
}

const bst: ITreeNode = {
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
