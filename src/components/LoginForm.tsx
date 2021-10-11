import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import {
  clearUserInfo,
  closeModal,
  getSessionId,
  setUserInfo,
} from '../store/action-creators';

interface State {
  sessionId: string;
  setSessionId: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = (): JSX.Element => {
  const [sessionId, setSessionId] = useState<State['sessionId']>('');
  const [display, setDisplay] = useState('none');

  const history = useHistory();

  const session = useSelector(
    (state: RootStateOrAny) => state.login.sessionInfo,
  );

  const dispatch = useDispatch();

  const handleSessionId = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSessionId(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (sessionId.trim() === '') {
      {
        setDisplay('red');
      }
    } else {
      dispatch(setUserInfo(true, sessionId));
      dispatch(closeModal());
      history.push('/');
    }
  };

  const renderMessage = (): JSX.Element => {
    return (
      <div className="session">
        <h2>Please generate a new session if you want to rate movies.</h2>
        <button
          className="btn-primary"
          onClick={() => dispatch(getSessionId())}
        >
          Generate new session
        </button>
      </div>
    );
  };

  const renderInput = (): JSX.Element => {
    return (
      <div className="session">
        <h2>Please enter your session id !</h2>
        <p>If You already have session ID please enter ID bellow</p>
        <form onSubmit={submit} className="form">
          <label>
            Session ID:
            <input
              type="password"
              name="sessionId"
              value={sessionId}
              placeholder="Session ID"
              onChange={handleSessionId}
              style={{ borderColor: display }}
            />
          </label>
          <button type="submit" value="Login" className="btn-login">
            Login
          </button>
        </form>
      </div>
    );
  };

  const renderSessionId = (): JSX.Element => {
    return (
      <div className="session">
        <h2>SessionId:</h2>
        <h4 className="id">{session.guest_session_id}</h4>
      </div>
    );
  };

  useEffect(() => {
    dispatch(clearUserInfo(false, ''));
  }, []);

  return (
    <div className="form-container">
      {session.success === true ? null : renderMessage()}
      {session.success === true && renderSessionId()}
      {renderInput()}
    </div>
  );
};

export default LoginForm;
