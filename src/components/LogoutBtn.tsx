import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from '../store/action-creators';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>You can now proceed to rate movies or you can logout !</h4>
      <button onClick={() => dispatch(clearUserInfo(false, ''))}>Logout</button>
    </div>
  );
};

export default LogoutBtn;
