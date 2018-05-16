import React, {Component} from 'react'
import { Alert, Button, Jumbotron,  Form } from 'reactstrap';
import Background from '../images/image1.jpg';
import TextInput from './TextInput'

var sectionStyle = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '750px',
  backgroundImage: `url(${Background})`
};


export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type ===
        'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }

  render() {
    const errors = this.props.errors || {}

    return (
      <section style={ sectionStyle }>
      <br/>
      <Jumbotron className="container" style={{ width: '20%' }}>
        <Form onSubmit={this.onSubmit}>
          <h3>Please login to continue..</h3>
          {errors.non_field_errors?<Alert color="danger">{errors.non_field_errors}</Alert>:""}
          <TextInput name="username" label="Username" error={errors.username} getRef={input => this.primaryInput = input} onChange={this.handleInputChange}/>
          <TextInput name="password" label="Password" error={errors.password} type="password" onChange={this.handleInputChange}/>
          <Button type="submit" size="md">Log In</Button>
        </Form>
      </Jumbotron>
      </section>
    );
  }
}
