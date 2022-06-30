import React, { Component } from 'react'
import blog1 from "../../../assets/img/blog-1.jpeg"
import blog2 from "../../../assets/img/blog-2.jpeg"
import blog3 from "../../../assets/img/blog-3.jpeg"
class Nineth extends Component {
  render() {
    return (
     <section className='nineth'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                  <div className="head">
                    <h1>Latest Blog</h1> <div className="line"></div>
                    <h2>an turn into your instructor your helper, your </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="box">
                    <img src={blog1} alt="" />
                    <div className="text">
                      <h1><a href="">Oct 15, 2016</a></h1>
                      <h2><a href="">Nanotechnology immersion along the information</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="box1">
                    <div className="image">
                    <img src={blog2} alt="" />
                    </div>
                    <h1><a href="">Oct 15, 2016</a></h1>
                    <h2><a href="">Nanotechnology immersion along <br /> the information</a></h2>
                    <h3>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion ....</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="box1">
                    <div className="image">
                    <img src={blog3} alt="" />
                    </div>
                    <h1><a href="">Oct 15, 2016</a></h1>
                    <h2><a href="">Nanotechnology immersion along <br /> the information</a></h2>
                    <h3>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion ....</h3>
                  </div>
                </div>
            </div>
        </div>
     </section>
    )
  }
}

export default Nineth