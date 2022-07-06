import React, { Component } from 'react'
import List from './list'
import InputComponent from './input'
export default class PubSub extends Component {
  render() {
    return (
      <div>
        <List />
        <InputComponent />
      </div>
    )
  }
}
