import React, { Component } from 'react'

// import Swiper core and required modules
import { Navigation,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

class First extends Component {
  render() {
    return (
        <section className='first'>
            <Swiper
                    // install Swiper modules
                    modules={[Navigation,A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    style={{width: "100%",height: "100%"}}
                    >
                        <SwiperSlide>
                            <div className="slide1">
                                <div className="container">
                                    <div className="row">
                                      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                          <div className="text">
                                              <h1>Quality Cake ...<br />  with sweet, eggs &amp; breads</h1>
                                              <h2>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut <br /> fugit quia consequuntur magni dolores eos qui ratione
                                              </h2>
                                              <button>See the recipe</button>
                                         </div>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="text">
                                                <h1>Cake Bakery ... <br /> make delicious products</h1>
                                                <h2>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut <br /> fugit quia consequuntur magni dolores eos qui ratione
                                                </h2>
                                                <button>See the recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
            </Swiper>
        </section>
    )
  }
}

export default First