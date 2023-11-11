import React from 'react'

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
export const Navbar = () => {
    
  return (
    <>
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-Link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/contact">Contact</Link>
        </li>    
      </ul>
    </div>
  </div>
</nav>
   
    </>
  )
}
