import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './index.css';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login'
import AdminLogin from './components/admin/AdminLogin'
import Panel from './components/admin/Panel'
import AdminDashboard from './components/admin/adminDashboard'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path ='/admin' exact component ={AdminDashboard}/>
      {/*<Route path ='/admin/login' exact component ={AdminLogin}/>*/}
      {/*<Route path ='/admin/panel' exact component ={Panel}/>*/}
      <Route path ='/' component ={App}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()