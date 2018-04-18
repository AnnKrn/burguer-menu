import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Counter extends Component {
    constructor(props){
        super()
    }
    render(){        
        return(
            <Jumbotron className = 'col-md-10 col-md-offset-1'>
                <Link to='/'>
                    <Button
                    bsStyle="primary"
                    bsSize="small"
                    >
                    Atras 
                    </Button>
                </ Link>
                {this.props.order.map(item =>{
                    return(
                        <div>
                            <p>{item.newItem}</p>
                            <p>{item.newPrice}</p>
                        </div>
                    )
                })}
                <h1>Total:{this.props.totalPrice}</h1>
                <Link to='/Checkout'>
                <Button
                    className ='col-md-8'
                    bsStyle="success"
                    bsSize="large"
                    target="_blank">
                     Pagar
                </Button>
                </ Link>
            </Jumbotron>
        )
    }
}

export default Counter;