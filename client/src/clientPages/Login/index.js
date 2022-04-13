import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from '../../routes'
import {useAuth} from '../../hooks/auth.hook'
import { AuthContext } from '../../context/AuthContext'
import { Navbar } from '../../components/Navbar'
import { Loader } from '../../components/Loader'
import * as styles from './style.module.css'
import 'materialize-css'

function Login() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <div className = {styles.adminDashboard}>
          <div className = {styles.menu}>
          { isAuthenticated && <Navbar /> }
          </div>
          <div className = {styles.content}>
          <div className="container">
          {routes}
          </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default Login