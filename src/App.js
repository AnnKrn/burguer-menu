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
        {id: 1, item: 'Cafe americano', price: '5', cuantity:0, photo:'https://ge.all.biz/img/ge/catalog/25137.jpeg'},
        {id: 2, item: 'Café con leche', price: '7',cuantity:0,photo:'https://www.japantimes.co.jp/wp-content/uploads/2018/03/b-coffee-a-20180331-200x200.jpg'},
        {id: 3, item: 'Sandwich de jamón y queso', price: '10',cuantity:0,photo:'https://dulcessecretos.cl/image/cache/catalog/adicionales/sandwich-tomate-lechuga-200x200.jpg'},
        {id: 4, item: 'Jugo natural', price: '7',cuantity:0,photo:'http://2104pu3s6y5t2uaipl2h97ig.wpengine.netdna-cdn.com/wp-content/uploads/2015/02/beneficios-de-la-naranja-200x200.jpg'},
        {id: 5, item: 'Especial de pollo', price: '30',cuantity:0,photo:'https://static02.ofertia.com.co/catalogos/c366df4d-502c-4808-92d8-6e8a27045ee9/17/small.v1.jpg'},
        {id: 6, item: 'Carnivora de res', price: '35',cuantity:0,photo:'https://static.vix.com/es/sites/default/files/styles/thumbnail/public/imj/vivirsalud/Q/Que-hay-realmente-en-una-hamburguesa-de-mcdonalds-2_0.jpg?itok=7zP1d_w0'},
        {id: 7, item: 'Vegetariana lovers', price: '35',cuantity:0,photo:'http://www.acayalla.es/wp-content/uploads/hamburguesas-vegetarianas-200x200.jpg'},
        {id: 8, item: 'Pizza burguer', price: '35',cuantity:0,photo:'https://b.zmtcdn.com/data/pictures/chains/2/18236832/af3138f6dad1bed968c0b2b2de027640.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'}
      ],
      order:[],
      totalPrice:0

    }
    this.addAndDelete = this.addAndDelete.bind(this)
    this.totalOrderPrice = this.totalOrderPrice.bind(this)
    this.otherOrder = this.otherOrder.bind(this)
    this.sumOrDecreaseCounter = this.sumOrDecreaseCounter.bind(this)
  }

  sumOrDecreaseCounter(id, value){

    let products = this.state.products;


    if(value === "agregar"){
     let itemToIncrease = products.find(item =>{
       return item.id === id
     })

     console.log(itemToIncrease)
    
    }
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
    let newProduct= []
    let stateOrder = this.state.order
    // Quitar productos
    let toDelete = {}

    if(value === 'agregar'){
      arrayProducts.forEach(item => {
        if(id === item.id){
            newProduct = [{
              id:item.id,
              newItem:item.item,
              newPrice:item.price
            }]
        }
      })
      this.setState({
        order: [...stateOrder, ...newProduct]
      })
    } else if (value === 'quitar') {
      stateOrder.forEach(item => {
        if(id === item.id){
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
                sumOrDecreaseCounter={this.sumOrDecreaseCounter}
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
