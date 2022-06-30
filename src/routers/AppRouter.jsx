import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from "../components/Header"
import Nav from "../components/Nav"
import Tenth from "../components/Tenth"
import Footer from "../components/Footer"
import Last from "../components/Last"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import OurCakes from "../components/pages/OurCakes"
import Menu from "../components/pages/Menu"
import Contact from "../components/pages/Contact"
import NotFoundPage from "../components/pages/NotFoundPage"

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <Nav/>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/ourcakes" component={OurCakes}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/notfoundpage" component={NotFoundPage}></Route>
      </Switch>

      <Tenth/>
      <Footer/>
      <Last/>
      </BrowserRouter>
    )
  }
}

export default AppRouter