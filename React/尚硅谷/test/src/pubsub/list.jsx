import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {
    subscribe: '11'
  }
  componentDidMount() {
    // 订阅
    this.token = PubSub.subscribe('hello', (msg,data) => {
      this.setState({subscribe: data})
    })
  }
  componentWillUnmount(){
    // 取消订阅
		PubSub.unsubscribe(this.token)
  }
 
  render() {
    return (
      <>
        <div>接收的消息是{this.state.subscribe}</div>
      </>
    )
  }
}
