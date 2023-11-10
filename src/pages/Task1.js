import React, { Component } from 'react'
import '../Stylesa/Task1.css'
import {AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom'

import {  Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Header from './Header';
import Card1 from '../task1/Card1';
import { HiHome,HiInformationCircle } from "react-icons/hi";
export class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: false,
    }
  }


  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
    return (
      <div>
        <div id='layout'>

          <div id='left' className={leftOpen} >
            <div className='icon'
              onClick={this.toggleSidebar} >
           &equiv;
       
            </div>
            <div className={`sidebar ${leftOpen}`} >
              <div className='header'>
                <h3 className='title'>
                  
                </h3>
              </div>
              <div className='content'>
              <h4><span style={{fontSize:'1.5em'}}><HiHome/></span><span>Home</span></h4>
              <h4><span style={{fontSize:'1.5em'}}><HiInformationCircle/></span><span>About US</span></h4>
              
              </div>
            </div>
          </div>

          <div id='main' >
            <div className='header'>
              <Header/>
              
            </div>
            <div className='content'>
              <h3>IceCream Cards</h3><br />
             <Card1/>
            </div>
          </div>

          {/* <div id='right' className={rightOpen} >
            <div className='icon'
              onClick={this.toggleSidebar} >
              &equiv;
            </div>
            <div className={`sidebar ${rightOpen}`} >
              <div className='header'>
                <h3 className='title'>
                  Right header
                </h3>
              </div>
              <div className='content'>
                <h3>Right content</h3><br />
                <p>
                  Mauris velit turpis, scelerisque at velit sed, porta varius tellus.
                  Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci.
                  Integer accumsan enim id sem aliquam sollicitudin.
                  Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit.
                  Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio.
                  Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
                </p>
              </div>
            </div>
          </div> */}

        </div>
      
      </div>
    )
  }
}

export default Task1
