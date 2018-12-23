import React, { Component } from 'react'
import AdminSideBar from './adminSideBar'
import NavbarPage from './NavBar'

class AdminDashboard extends Component {
  render () {
    return (
      <div>
        <NavbarPage/>
        <AdminSideBar/>
      </div>
    )
  }
}

export default AdminDashboard