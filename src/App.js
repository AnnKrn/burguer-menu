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
        {id: 1, item: 'Cafe americano', price: '5', cuantity:0, photo:'https://www.whatsuplife.in/kolkata/blog/wp-content/uploads/2017/11/coffee-feat.jpg'},
        {id: 2, item: 'Café con leche', price: '7',cuantity:0,photo:'https://cdn1.medicalnewstoday.com/content/images/articles/270202-coffee-splash.jpg'},        
        {id: 3, item: 'Sandwich de jamón y queso', price: '10',cuantity:0,photo:''},
        {id: 4, item: 'Jugo natural', price: '7',cuantity:0,photo:''},
        {id: 5, item: 'Especial de pollo', price: '30',cuantity:0,photo:''},
        {id: 6, item: 'Carnivora de res', price: '35',cuantity:0,photo:''},
        {id: 7, item: 'Vegetariana lovers', price: '35',cuantity:0,photo:''},
        {id: 8, item: 'Pizza burguer', price: '35',cuantity:0,photo:''}
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
