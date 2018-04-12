import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Food from './components/Food.js'
import Counter from './components/Counter.js'
import Checkout from './components/Checkout.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import {Link, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      products:[
        {id: 1, item: 'Cafe americano', price: '5', cuantity:0},
        {id: 2, item: 'Cafe con leche ', price: '7',cuantity:0},
        {id: 3, item: 'Sandwich de jamón y queso', price: '10',cuantity:0},
        {id: 4, item: 'Jugo natural', price: '7',cuantity:0},
        {id: 5, item: 'Especial de pollo', price: '30',cuantity:0},
        {id: 6, item: 'Carnivora de res', price: '35',cuantity:0},
        {id: 7, item: 'Vegetariana lovers', price: '35',cuantity:0},
        {id: 8, item: 'Pizza burguer', price: '35',cuantity:0}
      ]
    }
    // console.log(this.state.products)
  }

  render() {
    return (
      <div>
      <section>
      <Header titulo="1" component = {Header} />
      </section>
        <Grid>
          <Row>
            <Switch>
              <Route path = '/' exact render ={ () => {return(<Food products = {this.state.products}/>)}}/>
              <Route path = '/Checkout' component = {Checkout}/>
            </Switch>
          </Row>
        </Grid>
        <section>
        <Footer titulo="2" component = {Footer} />
        </section>
      </div>
    );
  }
}

export default App;
