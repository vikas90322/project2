import React, { Component } from 'react'
import Copoments2 from './Copoments2'

export default class Copoments1 extends Component {
    state={
        name:'Matrical',
        pic:'https://nicicecreams.com/wp-content/uploads/2023/01/IP-French-Vanilla.png'
    }
  render() {
    return (
      <div>
        
   <center>
    
   <Copoments2 name={this.state.name}  pic={this.state.pic} />
   </center>

       
      </div>
    )
  }
}
