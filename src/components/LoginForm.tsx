import React, { useState, useEffect } from 'react';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import {
  clearUserInfo,
  getSessionId,
  setUserInfo,
} from '../store/action-creators';

const LoginForm = () => {
  const [sessionId, setSessionId] = useState('');

  const session = useSelector(
    (state: RootStateOrAny) => state.login.sessionInfo,
  );

  const dispatch = useDispatch();

  const handleSessionId = (e) => {
    setSessionId(e.target.value);
  };

  const submit = (e) => {
    dispatch(setUserInfo(true, sessionId));
    e.preventDefault();
  };

  const renderMessage = (
    <div>
      <h4>
        If you are new to this app please generate new session so that you can
        rate movies.
      </h4>
      <h4>
        If you already have session id please enter your session id and login to
        proceed.
      </h4>
      <button onClick={() => dispatch(getSessionId())}>
        Generate new session
      </button>
    </div>
  );

  const renderSessionId = (
    <div>
      <h4>
        SessionId: {session.guest_session_id} <br /> You should treat this key
        like a password and keep it secret.
      </h4>
    </div>
  );

  useEffect(() => {
    dispatch(clearUserInfo(false, ''));
  }, []);

  return (
    <div>
      {session.success === true ? null : renderMessage}
      {session.success === true && renderSessionId}
      <div>
        <h4>Please enter your session id !</h4>
        <form onSubmit={submit}>
          <label>
            Session ID:
            <input
              type="password"
              name="sessionId"
              value={sessionId}
              onChange={handleSessionId}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
