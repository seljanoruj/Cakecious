import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="left">
                          <a href=""><i class="fa-solid fa-phone"></i> + (1800) 456 7890</a>
                          <a href=""><i class="fa-solid fa-envelope"></i> info@cakebakery.com</a>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="right">
                          <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                          <a href=""><i class="fa-brands fa-twitter"></i></a>
                          <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
                          <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                          <div className="line"></div>
                          <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                          <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    )
  }
}
export default Header