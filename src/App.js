import React, { Component } from 'react';
import './App.css';
import {
  Container,
  Button
} from 'reactstrap'
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <Container>
          <div style={{ float: 'right' }}>
            <Counters
              counters={this.state.counters}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
            <br />
            <Button color='success' className='btn-sm m-2' onClick={this.handleReset}>ریستارت</Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
