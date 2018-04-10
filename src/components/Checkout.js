import React, {Component} from 'react';
// import {Jumbotron} from 'react-bootstrap';


class Checkout extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>
            Total: {this.props.prueba2}
            </h1>
        )
    }
}

export default Checkout;