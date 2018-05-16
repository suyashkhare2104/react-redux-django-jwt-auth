import React, { Component } from 'react';
import { connect } from 'react-redux';

import {echo} from './actions/echo';
import {serverMessage} from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import {MyNavbar} from './components/navbar';

class App extends Component {


  render() {
    return (
      <div>
      <MyNavbar/>
      </div>
    );
  }
}

export default connect(
  state => ({ message: serverMessage(state) }),
  { fetchMessage: echo }
)(App);
