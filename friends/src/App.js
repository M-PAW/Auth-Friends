import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FriendForm from './components/Form';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
             <Link to='/login'>Login</Link>
          </li>
          <li>
             <Link to='/FriendForm'>Create Friend</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path='/protected' component={FriendForm} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  
  )}

export default App;
