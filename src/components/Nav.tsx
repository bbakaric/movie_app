import React from 'react';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

const Nav = (): JSX.Element => {
  const session = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.isLoggedIn,
  );

  return (
    <header className="showcase">
      <div className="logo-main">
        <Link to="/">
          <img src="src\assets\logo_main.png" alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="btn-login">
            <i className="fas fa-sign-in-alt">
              {!session ? ' Login' : ' Logout'}
            </i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
