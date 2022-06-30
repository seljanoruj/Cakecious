import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/img/logo.png"
class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="left">
                <NavLink activeClassName='now' exact to="/">Home</NavLink>
                <NavLink activeClassName='now' to="/ourcakes">Our Cakes</NavLink>
                <NavLink activeClassName='now' to="/menu">Menu</NavLink>
                <NavLink activeClassName='now' to="/about">About Us</NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="image">
              <img src={logo} />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="right">
                <a href="">Pages</a>
                <a href="">Blog</a>
                <a href="">Shop</a>
                <NavLink activeClassName='now' to="/contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav