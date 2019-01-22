import React, { Component } from 'react'
import AdminSideBar from './adminSideBar'
import AdminNavbar from './NavBar'
import { Switch, Route } from 'react-router-dom'
import AddMusic from './AddMusic'
import ListMusic from './ListMusic'
import DeleteMusic from './DeleteMusic'
import EditMusic from './EditMusic'
import { ToastContainer, Zoom } from 'react-toastify'

class AdminDashboard extends Component {
  componentDidMount(){
    if(localStorage.getItem('token')===null){
      this.props.history.push('/login')
    }
  }
  render () {

    return (
      <div className='admin-layout'>
        <ToastContainer transition={Zoom}/>
        <AdminNavbar/>
        <AdminSideBar/>
        <div className="admin-layout-wrapper">
          <main role='main'>
            <Switch>
              <Route path='/admin/add-music' component={AddMusic}/>
              <Route path='/admin/list-music' component={ListMusic}/>
              <Route path='/admin/delete-music' component={DeleteMusic}/>
              <Route path='/admin/edit-music' component={EditMusic}/>
              {/*<Route exact path="/" render={() => (*/}
                {/*loggedIn ? (*/}
                  {/*<Redirect to="/dashboard"/>*/}
                {/*) : (*/}
                  {/*<PublicHomePage/>*/}
                {/*)*/}
              {/*)}/>*/}
            </Switch>
          </main>
        </div>
      </div>
    )
  }
}

export default AdminDashboard