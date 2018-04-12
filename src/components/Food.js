import React, { Component } from 'react';
import { Button, Jumbotron} from 'react-bootstrap';
import Counter from './Counter';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'

class Food extends Component {
    constructor(props){
        super(props)
        this.food = props.dato.breakfast;
        console.log()
    }

    render(){
        return(
            <div>
            <div className = 'col-md-9'>
            <h3 className= 'text-center'>{ this.food.title }</h3>
                    {this.food.map( foo => {
                        return(
                            <div className="panel panel-default">
                            <div className="panel-body">
                                <div className ='col-md-9'>
                                    <h3 className="panel-title">{foo.item}</h3>
                                    <br/>
                                    <p >Precio: {foo.price}</p>
                                </div>
                                <Button
                                    // aqui detona evento
                                    onClick={this.props.prueba}

                                    className ='col-md-3'
                                    bsStyle="success"
                                    bsSize="large"
                                    target="_blank">
                                    Agregar
                                </Button>
                            </div>
                        </div>)
                    })}
                </div>
                <Counter comida={this.props.prueba2}/>
                </div>
        )
    }
}

export default Food
