import React from 'react';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { clearUserInfo, closeModal } from '../store/action-creators';

const Nav = (): JSX.Element => {
  const session = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.isLoggedIn,
  );

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearUserInfo(false, ''));
    dispatch(closeModal());
  };

  const renderLoginBtn = () => {
    return (
      <button className="btn-login">
        <i className="fas fa-sign-in-alt"> Login</i>
      </button>
    );
  };

  const renderLogoutBtn = () => {
    return (
      <button className="btn-login" onClick={() => logout()}>
        <i className="fas fa-sign-in-alt"> Logout</i>
      </button>
    );
  };

  return (
    <header className="showcase">
      <div className="logo-main">
        <Link to="/">
          <img src="src\assets\logo_main.png" alt="logo" />
        </Link>
      </div>
      <div>
        {!session ? (
          <Link to="/login">{renderLoginBtn()}</Link>
        ) : (
          renderLogoutBtn()
        )}
      </div>
    </header>
  );
};

export default Nav;
