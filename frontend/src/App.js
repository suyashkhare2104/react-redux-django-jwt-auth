import React, { Component } from 'react';
import { connect } from 'react-redux'

import {echo} from './actions/echo'
import {serverMessage} from './reducers'

class App extends Component {
  componentDidMount() {
      this.props.fetchMessage('Hi!')
  }

  render() {
    return (
      <div>
        <h2>Namaste!</h2>
      </div>
    );
  }
}

export default connect(
  state => ({ message: serverMessage(state) }),
  { fetchMessage: echo }
)(App);
