import React, { Component } from 'react'
import getAdminNavLinks from '../../services/fakeAdminNav'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AdminSideBar extends Component {

  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({ isActive: false })
  }

  render () {
    const adminNavLinks = getAdminNavLinks()
    return (
      <div className='admin-layout-sidebar'>
        <Button color='secondary' className='d-sm-none' onClick={
          () => this.setState({ isActive: !this.state.isActive })
        }>{this.state.isActive ? 'Hide Menu' : 'show menu'}</Button>

        <ul className={this.state.isActive ? 'selected' : null}>
          {adminNavLinks.map(adminNavLink => (
            <li key={adminNavLink.id}>
              <NavLink activeClassName='active' exact to={adminNavLink.link} onClick={this.handleClick}>
                <i className={`${adminNavLink.icon} fixed-width`}/>
                <span>{adminNavLink.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AdminSideBar