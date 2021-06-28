import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Membership from './components/membership/Index';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Membership} />
      </Switch>
    </Router>
  )
};


export default App;
