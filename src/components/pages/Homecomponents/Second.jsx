import React, { Component } from 'react'
import welcomeright from "../../../assets/img/welcome-right.jpeg"
class Second extends Component {
  render() {
    return (
      <section className='second'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="left">
                          <h1>Welcome to our Bakery</h1>
                          <h2>Ut enim ad minima veniam, quis nostrum exercitationem <br /> ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur uis autem vel eum.</h2>
                          <h3>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</h3>
                          <button>Know more about us</button>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="right">
                          <img src={welcomeright} alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Second