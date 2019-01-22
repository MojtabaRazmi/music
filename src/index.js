import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './index.css';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AdminDashboard from './components/admin/adminDashboard'
import AdminLogin from './components/admin/AdminLogin'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/*<Redirect from='/admin' to='/admin/panel' />*/}
      <Route path ='/admin' component ={AdminDashboard}/>
      <Route path ='/login' component ={AdminLogin}/>
      <Route path ='/' component ={App}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()