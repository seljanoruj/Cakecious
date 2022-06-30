import React, { Component } from 'react'
import logo2 from "../assets/img/logo-2.png"
class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="container h-100">
              <div className="row h-100">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12 h-100">
                      <div className="box">
                          <img src={logo2} />
                          <h1>At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis praesentium voluptatum deleniti atque corrupti.</h1>
                          <div className="icons">
                          <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                          <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                          <a href=""><i class="fa-brands fa-twitter"></i></a>
                          <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box1">
                         <h1>Quick Links</h1>
                         <a href="#">Your Account</a>
                         <a href="#">View Order</a>
                         <a href="#">Privacy Policy</a>
                         <a href="#">Terms &amp; Conditionis</a>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box1">
                         <h1>Work Times</h1>
                         <a href="#">Mon. :Fri.: 8 am - 8 pm</a>
                         <a href="#">Sat. : 9am - 4pm</a>
                         <a href="#">Sun. : Closed</a>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box2">
                          <h1>Contact Info</h1>
                          <h2>(1800) 574 9687</h2>
                          <h3>Justshiop Store <br/> 256, baker Street,, New Youk, 5245 </h3>
                          <h3>cakebakery@contact.co.in</h3>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}

export default Footer