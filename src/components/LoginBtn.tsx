import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getRequestToken } from '../store/action-creators';

const LoginBtn = () => {
  const token = useSelector(
    (state: RootStateOrAny) => state.login.requestToken,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestToken());
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(token);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginBtn;
