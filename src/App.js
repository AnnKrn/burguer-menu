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
      ],
      order:[],
      totalPrice:0
      
    }
    this.addAndDelete = this.addAndDelete.bind(this)
    this.totalOrderPrice = this.totalOrderPrice.bind(this)
    this.otherOrder = this.otherOrder.bind(this)
  }
  
  otherOrder(){
    this.setState({
      order:[],
      totalPrice:0
    })
  }

  totalOrderPrice(){
    let pricesOrder = this.state.order.map(item=>{
      return parseFloat (item.newPrice)
    })
    console.log(pricesOrder)
    
    // Total productos
    let totalPrice = pricesOrder.reduce((valorAnterior, valorActual)=>{
      // console.log(valorAnterior + valorActual)
      return valorAnterior + valorActual
    },0)
    this.setState({
      totalPrice: totalPrice
    })
  }
  addAndDelete(id, value) {
    const arrayProducts= this.state.products
    // Agregar productos
    let newProduct=[]
    let stateOrder = this.state.order
    // Quitar productos
    let toDelete = {}

    if(value == 'agregar'){
      arrayProducts.forEach(item => {
        if(id == item.id){
            newProduct =[{
              id:item.id,
              newItem:item.item,
              newPrice:item.price
            }]
        }
      })
      this.setState({
        order: [...stateOrder, ...newProduct]
      })
    } else if (value == 'quitar') {      
      stateOrder.forEach(item => {
        if(id == item.id){
          toDelete = {
            id:item.id,
            newItem:item.newItem,
            newPrice:item.newPrice
          }
        }
      })
      let deletedOrder = stateOrder.filter((item)=>{
        return item.id !== toDelete.id
      })
      this.setState({
        order:deletedOrder
      })
    }
    // totalOrderPrice(stateOrder)
  }

  


  render() {
    return (
      <div>
      <section>
      <Header titulo="1"/>
      </section>
        <Grid>
          <Row>
            <Switch>
              <Route path = '/' exact render ={ () => {return(<Food 
                addAndDelete={this.addAndDelete} 
                products = {this.state.products} 
                totalPrice={this.state.totalPrice}
                totalOrderPrice={this.totalOrderPrice}
                />)}}/>
              <Route path = '/Counter' exact render = {()=>{return(<Counter 
                order={this.state.order}
                totalPrice={this.state.totalPrice}
                />)}}/>
              <Route path = '/Checkout' exact render = {() => {return (<Checkout
                otherOrder={this.otherOrder}
                />)}}/>
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
