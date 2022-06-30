import React, { Component } from 'react'

class Fifth extends Component {
  render() {
    return (
        <section className='fifth'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="head">
                            <h1>Main Services We Provide</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box">
                            <i class="fa-solid fa-cake-candles"></i>
                            <h1>Celebration Cakes</h1>
                            <h2>Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box">
                            <i class="fa-solid fa-cookie-bite"></i>
                            <h1>Celebration Cakes</h1>
                            <h2>Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box">
                            <i class="fa-solid fa-ice-cream"></i>
                            <h1>Celebration Cakes</h1>
                            <h2>Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Fifth