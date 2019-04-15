/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { Component } from 'react';
import Input from '@components/Common/Input';
import Card from '@components/Common/Card';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  goToLogin = () => {
    this.props.history.push('/');
  };

  getSignupInfo = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="df fdc jcc aic h-86vh">
        <Card classes="p-10px w-300px">
          <form className="df fdc jcsa aic h-400px" onSubmit={(e) => { this.getSignupInfo(e); }}>
            <h3>
              SIGN UP
            </h3>
            <label htmlFor="firstName">
              First Name
              <br />
              <Input
                autoFocus
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                classes="mt-10px h-25px"
                placeholder="Enter First Name"
                onChange={(e) => { this.handleInputChange(e); }}
              />
            </label>
            <label htmlFor="lastName">
              Last Name
              <br />
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                classes="mt-10px h-25px"
                placeholder="Enter Last Name"
                onChange={(e) => { this.handleInputChange(e); }}
              />
            </label>
            <label htmlFor="email">
              Email
              <br />
              <Input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                classes="mt-10px h-25px"
                placeholder="Enter Email"
                onChange={(e) => { this.handleInputChange(e); }}
              />
            </label>
            <label htmlFor="password">
              Password
              <br />
              <Input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                classes="mt-10px h-25px"
                placeholder="Enter Password"
                onChange={(e) => { this.handleInputChange(e); }}
              />
            </label>
            <div className="df jcsa aic w-300px">
              <button className="btnSec fs-14" type="submit">
                Submit
              </button>
              <button className="btnNeg fs-14" type="button" onClick={() => { this.goToLogin(); }}>
                Cancel
              </button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default SignUp;
