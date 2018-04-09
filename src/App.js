import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import data from './data.js'
import Food from './components/Food.js'
import Counter from './components/Counter.js'


class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Food dato = {data}/>
            <Counter/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
