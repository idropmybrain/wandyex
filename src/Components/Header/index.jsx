import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

const logout = (history) => {
  localStorage.clear();
  history.push('/');
};

const renderButtons = (history) => {
  if (history.location.pathname === '/signup') {
    return <Link className="btnPrim mr-10px" to="/">Login</Link>;
  } if (history.location.pathname === '/') {
    return <Link className="btnPrim mr-10px" to="/signup">Sign Up</Link>;
  }
  return <button onClick={() => { logout(history); }} className="btnPrim mr-10px" type="button">Logout</button>;
};

const Header = withRouter(({ history }) => {
  return (
    <header className="header pl-10px pr-10px">
      <img src="logo.png" className="w-auto h-90pc" alt="Sakha Logo" />
      {renderButtons(history)}
    </header>
  );
});

export default Header;
