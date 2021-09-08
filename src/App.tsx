import React from 'react';
import Main from './views/Main';
import Login from './views/Login';

const App = (): JSX.Element => {
  return (
    <div>
      <Login />
      <Main />
    </div>
  );
};

export default App;
