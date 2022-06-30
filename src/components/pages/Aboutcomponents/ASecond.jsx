import React, { Component } from 'react'
import img1 from "../../../assets/img/bakery-1.jpeg"
import img2 from "../../../assets/img/bakery-2.jpeg"
import img3 from "../../../assets/img/bakery-3.jpeg"

class ASecond extends Component {
  render() {
    return (
      <section className='asecond'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="head">
                          <h1>Our Bakery Approach </h1>
                          <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h2>
                          <h3>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.</h3>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                      <img src={img1} alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                      <img src={img2} alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                      <img src={img3} alt="" />
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default ASecond