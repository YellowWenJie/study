import Icon from './icon.png'

function component () {
  const element = document.createElement('div')

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  return element
}

document.body.appendChild(component())
