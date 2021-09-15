import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import Main from './views/Main';
import MovieRouletteModal from './views/MovieRouletteModal';

const App = (): JSX.Element => {
  return (
    <Router>
      <header className="showcase">
        <div className="logo-main">
          <Link to="/">
            <img src="src\assets\logo_main.png" alt="logo" />
          </Link>
        </div>
        <div className="roulette-login">
          <div>
            <Link to="/roulette">
              <button className="btn-secondary">
                <i className="fas fa-film"> Movie roulette</i>
              </button>
            </Link>
          </div>
          <div>
            <Link to="login">
              <button className="btn-primary">
                <i className="fas fa-sign-in-alt"> Login</i>
              </button>
            </Link>
          </div>
        </div>
      </header>

      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/roulette">
          <MovieRouletteModal />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
