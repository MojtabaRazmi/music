import React, { Component } from 'react'
import getAdminNavLinks from '../../services/fakeAdminNav'
import {Link} from 'react-router-dom'
import {Nav} from 'reactstrap';
import {Button} from 'reactstrap'

class AdminSideBar extends Component {

  state={
    isActive : false
  }

  render () {
    console.log(this.state.isActive)
    const adminNavLinks = getAdminNavLinks()
    return (
      <div className='mySidebar'>
        <Button color='secondary' className='d-sm-none myButton' onClick={
          ()=>this.setState({isActive : !this.state.isActive})
        }>SHOW</Button>
        <Nav className='bg-light mySidebar'>
        <div className='sidebar-sticky'>
          <div>
            <ul className={`nav flex-column ${this.state.isActive ? 'show' : null}`}>
              {adminNavLinks.map(adminNavLink=>(
                <li className='nav-item' key={adminNavLink.id}>
                  <Link className='nav-link' to={adminNavLink.link}>
                    <span className={adminNavLink.icon}/>
                    <span className='m-2'>{adminNavLink.text}</span>
                    <hr className='shadow'/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Nav>
      </div>
    )
  }
}

export default AdminSideBar;