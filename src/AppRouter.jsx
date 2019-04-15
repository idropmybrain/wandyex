import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Login from '@containers/Login';
import SignUp from '@containers/SignUp';
import Dashboard from '@containers/Dashboard';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (typeof window.localStorage.getItem('user') !== 'undefined'
        && window.localStorage.getItem('user') !== null
        && window.localStorage.getItem('user') !== '' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ))
      }
    />
  );
};

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
