import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSessionId, setUserInfo } from '../store/action-creators';
import LogoutBtn from '../components/LogoutBtn';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    dispatch(setUserInfo(true, userName, password));
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getSessionId());
  }, []);

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="">
          Username:
          <input
            type="text"
            name="username"
            value={userName}
            onChange={handleUserName}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      <LogoutBtn />
    </div>
  );
};

export default Login;
