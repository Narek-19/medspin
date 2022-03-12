import React from 'react';
import 'materialize-css';

import Login from './clientPages/Login';
import {Contact} from './clientPages/Contact';
import {Home} from './clientPages/Home';
import { Courses } from './clientPages/Courses';
import {About} from './clientPages/About';

import { BrowserRouter,Route} from 'react-router-dom';
import  {ClientNavbar} from './ClientNavbar/';

function App() {
  return (
    <>
      <BrowserRouter>
        <ClientNavbar />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App
