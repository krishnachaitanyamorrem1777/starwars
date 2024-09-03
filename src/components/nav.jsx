import React from 'react'
import Logo from "../assets/logo.png"
import "./nav.css"


const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div className="container-fluid">
          <a className="navbar-brand"  href="#">
            <img src={Logo} alt="" width="35" height="30" className="d-inline-block align-text-top"/>
            <span>  <b> STAR WARS</b></span>
          

            
          </a>
          
      </div>
    </nav>
  )
}

export default Nav
