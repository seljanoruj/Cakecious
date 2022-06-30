import React, { Component } from 'react'
import chef1 from "../../../assets/img/chef-1.jpeg"
import chef2 from "../../../assets/img/chef-2.jpeg"
import chef3 from "../../../assets/img/chef-3.jpeg"
class Eighth extends Component {
  render() {
    return (
      <section className='eighth'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box">
                          <h1>Our Chefs</h1>
                          <h2>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion.</h2>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box1">
                          <img src={chef1} alt="" />
                          <a href="">Michale Joe</a>
                          <h1>Expert in Cake Making</h1>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box1">
                          <img src={chef2} alt="" />
                          <a href="">Michale Joe</a>
                          <h1>Expert in Cake Making</h1>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="box1">
                          <img src={chef3} alt="" />
                          <a href="">Michale Joe</a>
                          <h1>Expert in Cake Making</h1>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Eighth