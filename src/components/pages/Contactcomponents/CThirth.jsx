import React, { Component } from 'react'

class CThirth extends Component {
  render() {
    return (
      <section className='cthirth'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="head">
                          <h1>Get In Touch</h1>
                          <h2>Do you have anything in your mind to let us know?  Kindly don't delay to connect to us by means of our contact form.</h2>
                      </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-6 col-6 col-12">
                      <div className="left">
                          <div className="inputs">
                              <input className='i1' type="text" placeholder='Your name' />
                              <input className='i1' type="text" placeholder='Email adress' />
                          </div>
                          <input className='i1' type="text" placeholder='Subject' />
                          <input className='i2' type="text" placeholder='Write message' />
                      </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 col-6 col-12">
                      <div className="right">
                          <div className="text">
                              <h1>Address :</h1>
                              <h2>54B, Tailstoi Town 5238 <br /> La city, IA 522364</h2>
                          </div>
                          <div className="text">
                              <h1>Phone : <a href="">01372.466.790</a></h1>
                              <h1>Email : <a href="">rockybd1995@gmail.com</a></h1>
                          </div>
                          <div className="text">
                              <h1>Opening Hours :</h1>
                              <h2>8:00 AM – 10:00 PM</h2>
                              <h2>Monday – Sunday</h2>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="btn">
                          <button>submit now</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default CThirth