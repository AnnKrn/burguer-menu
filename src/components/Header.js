import React, { Component } from "react";
import logo from './images/queen.png';
import './css/Header.css'



class Header extends Component {
  render() {
    return (
      <div id='header-wrapper'>
        <div id="header" className="container">
          <nav className="navbar navbar-light bg-danger">
          <img src={logo} alt="logo" width="100px" />
          </nav>

        </div>
        <h5>Comida rápida 24 horas</h5>
      </div>
    )
  }
}

export default Header;
