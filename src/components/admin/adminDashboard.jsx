import React, { Component } from 'react'
import AdminSideBar from './adminSideBar'
import AdminNavbar from './NavBar'
import {Switch, Route} from 'react-router-dom'
import AddMusic from './AddMusic'

class AdminDashboard extends Component {
  render () {

    return (
      <div className='container-fluid1'>
        <AdminNavbar/>
        <div className='row'>
        <AdminSideBar/>
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
            <Switch>
              <Route path='/admin/addmusic' component={AddMusic}/>
            </Switch>
          </main>
        </div>
      </div>
    )
  }
}

export default AdminDashboard