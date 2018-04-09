import React, { Component } from 'react';
import { Grid, Panel, Button} from 'react-bootstrap';

class Food extends Component {
    constructor(props){
        super(props)
        this.food = props.dato.breakfast;
    }

    render(){
        return(
            <div className = 'col-md-8'>
            <h3 className="text-center">{this.food.title}</h3>
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
        )
    }
}

export default Food