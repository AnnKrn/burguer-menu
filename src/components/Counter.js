import React, {Component} from 'react';
import { Grid, Jumbotron, Button} from 'react-bootstrap';

class Counter extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Jumbotron className = 'col-md-4'>
                <p>Total:</p>
                <Button
                    className ='col-md-8'
                    bsStyle="success"
                    bsSize="large"
                    target="_blank">
                    Pagar
                </Button>
            </Jumbotron>
        )
    }
}

export default Counter;