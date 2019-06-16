import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Login from './Login.js'
import SignUp from './SignUp.js'
import Users from './Users.js'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Web Auth III</h1>
        <nav>
          <NavLink to = '/'>Home</NavLink>
          <NavLink to = '/login'>Login</NavLink>
          <NavLink to = '/signup'>Sign Up</NavLink>
          <NavLink to = '/users'>User List</NavLink>
        </nav>
        
        <div>
          <Route path = '/login' component = {Login} />
          <Route path = '/signup' component = {SignUp} />
          <Route path = '/users' component = {Users} />
        </div>
    </div>
  );
}

export default App;
