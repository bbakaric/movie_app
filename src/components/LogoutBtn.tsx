import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from '../store/action-creators';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(clearUserInfo(false, '', ''))}>
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
