import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {
  Container,
  Button
} from 'reactstrap'
import NavBar from './components/navbar'
import Counters from './components/counters'
import { resetCounters } from './actions';

const App = ({ dispatch }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <div style={{ float: 'right' }}>
          <Counters />
          <br />
          <Button color='success' className='btn-sm m-2' onClick={()=>dispatch(resetCounters())}>ریستارت</Button>
        </div>
      </Container>
    </React.Fragment>
  );
}


export default connect()(App);
