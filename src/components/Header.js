import React, {Component} from "react";
import logo from './images/queen.png';
import './css/Header.css'
import { Button} from 'react-bootstrap';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'

class Header extends Component {
  render(){
    return (
        <div id='header-wrapper'>
           <div id="header" className="container">
            <img src={logo} alt="logo" width="200px"/>
           </div>
          <h5>Comida rápida 24 horas</h5>
          
          <Button
            bsStyle="primary"
            bsSize="small"
            >
            <Link to='/Checkout'>Confirma tu orden</ Link>  
          </Button>
        </div>
    )
  }
}

export default Header;
