import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/personagens" component={ MainPage } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
