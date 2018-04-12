import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import data from './data.js'
import Food from './components/Food.js'
import Counter from './components/Counter.js'
import Checkout from './components/Checkout.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import {Link, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {totalMount: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      totalMount:this.state.totalMount +1
    })
  }

  render() {
    return (
      <div>
      <section>
      <Header titulo="1" component = {Header} />
      </section>
        <Grid>
          <Row>
            {/* <Food dato = {data} prueba={this.handleClick} prueba2= {this.state.totalMount}/> */}
            {/* <Checkout prueba2= {this.state.totalMount} /> */}
            {/* <Counter prueba2= {this.state.totalMount}/> */}
            <Switch>
              <Route path = '/' exact render ={ () => {return(<Food dato = {data} prueba={this.handleClick} prueba2= {this.state.totalMount}/>)}}/>
              {/* <Route path = '/Counter' exact render = {() => {return(<Counter />)}}/> */}

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
