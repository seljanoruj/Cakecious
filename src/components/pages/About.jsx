import React, { Component } from 'react'
import AFirst from "./Aboutcomponents/AFirst"
import ASecond from "./Aboutcomponents/ASecond"
import Eighth from './Homecomponents/Eighth'
class About extends Component {
  render() {
    return (
      <>
      <AFirst/>
      <ASecond/>
      <Eighth/>
      </>
    )
  }
}

export default About