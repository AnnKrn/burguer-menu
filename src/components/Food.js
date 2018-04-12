import React, { Component } from 'react';
import { Button, Jumbotron} from 'react-bootstrap';
import Counter from './Counter';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'

class Food extends Component {
    constructor(props){
        super(props)
        // this.food = props.dato.breakfast;
        // console.log(this.props.products)
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(id) {
        console.log(id)
      }
    render(){
        return(
            <div>
            <div className = 'col-md-9'>
            <h3 className= 'text-center'></h3>
                    {this.props.products.map( foo => {
                        return(
                            <div className="panel panel-default">
                            <div className="panel-body">
                                <div className ='col-md-9'>
                                    <h3 className="panel-title">{foo.item}</h3>
                                    <br/>
                                    <p >Precio: {foo.price}</p>
                                    <p >Cantidad: {foo.cuantity}</p>
                                </div>
                                <Button
                                    // aqui detona evento
                                    onClick={()=>{this.handleClick(foo.id)}}

                                    className ='col-md-3'
                                    bsStyle="success"
                                    bsSize="large"
                                    target="_blank">
                                    Quitar
                                </Button>
                                <Button
                                    // aqui detona evento
                                    onClick={this.handleClick}

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
                <Counter orden={this.props.products}/>
                </div>
        )
    }
}

export default Food
