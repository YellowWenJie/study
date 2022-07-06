import React from 'react'
import PubSub from 'pubsub-js'

export default class InputComponent extends React.Component {
  inputRef = React.createRef()
  handle() {
    // 发布
    PubSub.publish('hello', this.inputRef.current.value)
  }
  render() {
    return (
      <>
        <input type="text" ref={ this.inputRef }/>
        <button onClick={ () => this.handle() }>发布消息</button>
      </>
    )
  }
}
