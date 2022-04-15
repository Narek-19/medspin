import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import * as styles from './style.module.css';

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav className = {styles.adminDashboard}>
        <ul>
          <li><NavLink to="/settings">Settings</NavLink></li>
          <li><NavLink to="/settings">Settings2</NavLink></li>
          <li><NavLink to = "/home-settings">Home</NavLink></li>
          <li><NavLink to="/students">Students</NavLink></li>
          <li><NavLink to="/dashboard">DashBoard</NavLink></li>
          <li><NavLink to="/create">Create Course</NavLink></li>
          <li><NavLink to="/links">Courses</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>LogOut</a></li>
        </ul>
    </nav>
  )
}
