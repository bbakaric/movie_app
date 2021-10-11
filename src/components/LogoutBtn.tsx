import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from '../store/action-creators';

const LogoutBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Link to="/">
      <button
        className="btn-logout"
        onClick={() => dispatch(clearUserInfo(false, ''))}
      >
        Logout
      </button>
    </Link>
  );
};

export default LogoutBtn;
