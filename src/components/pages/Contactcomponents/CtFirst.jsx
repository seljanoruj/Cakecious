import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CtFirst extends Component {
  render() {
    return (
        <section className='cfirst'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="head">
                          <h1>Contact Us</h1>
                            <div className="head-text">
                              <Link className='now' to="/">Home<i class="fa-solid fa-angle-right"></i></Link>
                              <Link className='ser'
                              to="/menu">Contact Us</Link>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default CtFirst