import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/Feedback" component={ Feedback } />
    </Switch>
  );
}

export default App;
