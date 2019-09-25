import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import User from './views/User';
import Landing from './views/Landing';
import Post from './views/Post';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/user/:userId" component={User} />
        <Route path="/post/:postId" component={Post} />
        <Route default component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
