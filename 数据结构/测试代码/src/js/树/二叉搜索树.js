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

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key); // {1}
      this.preOrderTraverseNode(node.left, callback); // {2}
      this.preOrderTraverseNode(node.right, callback); // {3}
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback); // {1}
      this.postOrderTraverseNode(node.right, callback); // {2}
      callback(node.key); // {3}
    }
  }

  min () {
    return this.minNode(this.root)
  }

  minNode (node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  max () {
    return this.maxNode(this.root)
  }

  maxNode (node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search (key) {
    return this.searchNode(this.root, key)
  }

  searchNode (node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(this.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(this.right, key)
    } else {
      return true
    }
  }

  remove (key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode (node, key) {
    if (node == null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(this.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(this.right, key)
      return node
    } else {
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      if (node.left == null) {
        node = node.right
        return node
      }
      if (node.right == null) {
        node = node.left
        return node
      }
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}