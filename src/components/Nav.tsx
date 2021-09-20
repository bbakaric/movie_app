import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (): JSX.Element => {
  return (
    <header className="showcase">
      <div className="logo-main">
        <Link to="/">
          <img src="src\assets\logo_main.png" alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="btn-primary">
            <i className="fas fa-sign-in-alt"> Login</i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
