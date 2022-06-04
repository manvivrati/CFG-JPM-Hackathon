import React from 'react'
import { Route, Routes, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap'


import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin"
import Home from "./components/Home";

const App = () => {
  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink className="navbar-brand" to="/">Jhatka</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className="nav-link" to='/login'>Login</NavLink>
          <NavLink className="nav-link" to='/signin'>Sign In</NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Routes>
        <Route path= "/" element= {<Home/>}></Route>     
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/signin" element = {<Signin/>}></Route>
      </Routes>
    </>
  )
}

export default App