/*
 * @Author: 黄文杰
 * @Date: 2022-08-01 21:20:33
 * @LastEditTime: 2022-08-01 21:28:20
 */
function visitNode(n: Node) {
  if (n instanceof Comment) {
    // 注释
    console.log('Comment node ---', n.textContent)
  }

  if (n instanceof Text) {
    // 文本
    console.log('Text node ---', n.textContent?.trim())
  }

  if (n instanceof HTMLElement) {
    // element
    console.log('Element node ---', `<${n.tagName.toLowerCase()}>`)
  }
}

/**
 * @description: 深度优先遍历
 * @return {*}
 */
function depthFirstTraverse(root: Node) {
  visitNode(root)

  const childNodes = root.childNodes // .childNodes 与 .childNode 不一样
  if (childNodes.length) {
    childNodes.forEach(child => {
      depthFirstTraverse(child)
    })
  }
}
