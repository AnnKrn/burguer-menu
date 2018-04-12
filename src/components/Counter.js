import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'


class Counter extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.orden)
    }
    render(){
        return(
            <Jumbotron className = 'col-md-3'>
                <p>Total: {this.props.orden[0].item}</p>
            
                <Button
                    className ='col-md-8'
                    bsStyle="success"
                    bsSize="large"
                    target="_blank">
                     <Link to='/Checkout'>Pagar</ Link>
                </Button>
            </Jumbotron>
        )
    }
}

export default Counter;