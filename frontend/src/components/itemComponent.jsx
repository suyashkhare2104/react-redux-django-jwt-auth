import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


export class ItemComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedOption: '' ,
      quantity: 0,
      showList: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (selectedOption) => {
  this.setState({ selectedOption });
}


  render(){
    let options = this.props.items;
    const {selectedOption} = this.state;
    console.log(options);
    return(
    <div>
    <Select
    name="Select the product"
    value={this.state.selectedOption}
    onChange={this.handleChange}
    options={options}
    />
    </div>
    );
  }
}
