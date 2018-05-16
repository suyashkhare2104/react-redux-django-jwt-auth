import React from 'react';s
import 'bootstrap/dist/css/bootstrap.css';

import {ItemComponent} from '../components/itemComponent';
import {MyNavbar} from '../components/navbar';
import axios from 'axios';

export class POS extends React.Component{

    constructor(props){
      super(props);
      this.state= {
        items: []
      };
    }

  componentWillMount() {
  axios.get(`http://127.0.0.1:8000/items/`)
    .then(res => {
      const items = res.data;
      this.setState({ items });
      console.log(items);
    })
}
  render(){
    return(
      <div>
      <MyNavbar/>
      <ItemComponent items={this.state.items}/>
      </div>
    );
  }
}
