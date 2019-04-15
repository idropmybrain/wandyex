/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { Component } from 'react';
import Input from '@components/Common/Input';
import Card from '@components/Common/Card';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getCred = (e) => {
    e.preventDefault();
    localStorage.clear();
    localStorage.setItem('user', this.state.email);
    localStorage.setItem('pwd', this.state.password);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="df fdc jcc aic h-86vh">
        <Card classes="p-10px w-300px">
          <form className="df fdc jcsa aic h-300px" onSubmit={(e) => { this.getCred(e); }}>
            <label htmlFor="email">
              Email
              <br />
              <Input
                autoFocus
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
            <div className="df jcsa aic w-200px">
              <button disabled={!(this.state.email !== '' || this.state.password !== '')} className="btnSec fs-14" type="submit">
                Login
              </button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default Login;
