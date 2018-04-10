import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'


class Counter extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Jumbotron className = 'col-md-4'>
                <p>Total: {this.props.prueba2}</p>
                <Button
                   
                    className ='col-md-8'
                    bsStyle="success"
                    bsSize="large"
                    target="_blank">
                     <Link to='/Checkout'>Pagar</ Link>
                </Button>
                <Switch>
                    <Route path = '/Checkout' component = {Checkout}/>
                </Switch>
            </Jumbotron>
        )
    }
}

export default Counter;