import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import LogoutBtn from '../components/LogoutBtn';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const user = useSelector((state: RootStateOrAny) => state.login.userInfo);
  return (
    <div>
      {user.sessionId === '' && <LoginForm />}
      {user.sessionId !== '' && <LogoutBtn />}
    </div>
  );
};

export default Login;
