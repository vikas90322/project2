import React, { Component } from 'react'
import Copoments1 from './Copoments1'

export default class Copoments2 extends Component {
  render() {
    return (
      <div>
        
        <h2>{this.props.name}</h2>
        <img src={this.props.pic} alt="" />
      </div>
    )
  }
}
