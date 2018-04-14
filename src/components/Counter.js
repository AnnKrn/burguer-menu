import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'


class Counter extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.order)
        return(
            <Jumbotron className = 'col-md-3'>
                {this.props.order.map(item =>{
                    return(
                        <div>
                            <p>{item.newItem}</p>
                            <p>{item.newPrice}</p>
                        </div>
                    )
                })}
            
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