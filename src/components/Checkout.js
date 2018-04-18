import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Checkout extends Component{
    constructor(props){
        super(props)
        this.trigerOtherOrder = this.trigerOtherOrder.bind(this)
    }

    trigerOtherOrder() {
        this.props.otherOrder()
    }

    render(){
        return(
            <div>
                <Link to='/'>
                    <Button
                    onClick={this.trigerOtherOrder}
                    bsStyle="primary"
                    bsSize="small"
                    >
                    Nueva Orden 
                    </Button>
                </ Link>
                <h1>
                ¡Gracias por tu compra!
                </h1>
            </div>
        )
    }
}

export default Checkout;