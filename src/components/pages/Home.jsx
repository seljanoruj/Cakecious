import React, { Component } from 'react'
import First from "./Homecomponents/First"
import Second from "./Homecomponents/Second"
import Fifth from "./Homecomponents/Fifth"
import Sixth from "./Homecomponents/Sixth"
import Eighth from "./Homecomponents/Eighth"
import Nineth from './Homecomponents/Nineth'

class Home extends Component {
  render() {
    return ( 
      <>
      <First/>
      <Second/>
      <Fifth/>
      <Sixth/>
      <Eighth/>
      <Nineth/>
      </>
    )
  }
}

export default Home