import { Node } from '../models/node';
import { Compare, defaultCompare } from '../util';

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; // 用来比较节点值
    this.root = null; // {1} Node类型的根节点
  }

  insert (key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode (node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // {4}
      if (node.left == null) { // {5}
        node.left = new Node(key); // {6}
      } else {
        this.insertNode(node.left, key); // {7}
      }
    } else {
      if (node.right == null) { // {8}
        node.right = new Node(key); // {9}
      } else {
        this.insertNode(node.right, key); // {10}
      }
    }
  }

  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode (node, callback) {
    if (node != null) { // {2}
      this.inOrderTraverseNode(node.left, callback); // {3}
      callback(node.key); // {4}
      this.inOrderTraverseNode(node.right, callback); // {5}
    }
  }
}