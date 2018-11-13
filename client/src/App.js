import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <HomePage />
          <Switch>
            <Route exact path="/api/post/:id" component={SinglePostPage} />
          </Switch>
      </div>
        
    );
  }
}

export default App;
