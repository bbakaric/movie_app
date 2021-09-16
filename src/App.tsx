import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './views/Login';
import Main from './views/Main';
import MovieRouletteModal from './views/MovieRouletteModal';

const App = (): JSX.Element => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movie-roulette" component={MovieRouletteModal} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
