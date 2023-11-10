import React, { Component } from 'react'
import '../Stylesa/Task1.css'

import { Link } from 'react-router-dom'

import {  Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Register from '../pages/Register';


export class Registera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: false,
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
            
                <p>
                <Sidebar aria-label="Sidebar with logo branding example">
     
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            
          <Link to='/Registera' >Register</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
                </p>
              </div>
            </div>
          </div>

          <div id='main' style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC19LpT2FESW4QFDcURy02HHSsvbpptJ9y6g&usqp=CAU)',backgroundSize:'cover'}} >
            <div className='header'>
              <h3 className={`
            title
            ${'left-' + leftOpen}
            ${'right-' + rightOpen}
        `}>
                Main header
              </h3>
            </div>
            <div className='content'>
           <Register/>
            </div>
          </div>

          <div id='right' className={rightOpen} >
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
          </div>

        </div>
      
      </div>
    )
  }
}

export default Registera
