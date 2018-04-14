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
      order:[]

    }
    this.handleClick = this.handleClick.bind(this)
    
  }
  
  handleClick(id, value) {
    const arrayProducts= this.state.products
    // Agregar productos
    let newProduct=[]
    let stateOrder = this.state.order

    // Quitar productos
    let toDelete = {}
    console.log(this.state.order)
    
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
      console.log(this.state.order)
      
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
      console.log(this.state.order)
    }

    
    
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
              <Route path = '/' exact render ={ () => {return(<Food 
                handleClick={this.handleClick} 
                products = {this.state.products} 
                />)}}/>
              <Route path = '/Checkout' exact render = {()=>{return(<Counter 
                order={this.state.order}/>)}}/>
              <Route path = '/Final' component = {Checkout}/>
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
