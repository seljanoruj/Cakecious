import React, { Component } from 'react'
import CtFirst from "../pages/Contactcomponents/CtFirst"
import CSecond from "../pages/Contactcomponents/CSecond"
import CThirth from "../pages/Contactcomponents/CThirth"

class Contact extends Component {
  render() {
    return (
      <>
      <CtFirst/>
      <CThirth/>
      <CSecond/>
      </>
    )
  }
}

export default Contact