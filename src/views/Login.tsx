import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import LogoutBtn from '../components/LogoutBtn';
import LoginForm from '../components/LoginForm';

const Login = (): JSX.Element => {
  const user = useSelector((state: RootStateOrAny) => state.login.userInfo);

  const renderImage = (): JSX.Element => {
    return (
      <div className="form-img">
        <img src="./src/assets/login_form.jpg" alt="login_logo" />
      </div>
    );
  };

  return (
    <div className="login">
      {renderImage()}
      {user.sessionId === '' && <LoginForm />}
      {user.sessionId !== '' && <LogoutBtn />}
    </div>
  );
};

export default Login;
