import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import { AdminDashboard } from './components/admin/AdminDashboard'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import { SettingsPage } from './pages/SettingsPage'
import {AuthPage} from './pages/AuthPage'
import  StudentsPage  from './pages/StudentsPage/index'
import CurrentStudent  from './pages/StudentsPage/CurrentStudent'
import HomeSettings from './pages/HomeSettings'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/dashboard" exact>
          <AdminDashboard/>
        </Route>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/settings" exact>
          <SettingsPage />
        </Route>
        <Route path = "/home-settings" exact>
          <HomeSettings/>
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/students" exact>
          <StudentsPage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/student/:id">
          <CurrentStudent/>
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
