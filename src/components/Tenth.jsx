import React, { Component } from 'react'

class Tenth extends Component {
  render() {
    return (
      <section className='tenth'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="text">
                          <h1>Join our Newsletter list to get all the latest <br /> offers, discounts and other benefits</h1>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="buttons">
                          <input type="text" placeholder='Enter your email adress' />
                          <button>Subscribe Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Tenth