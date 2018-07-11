import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import Register from '../screens/Register';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </BrowserRouter>
);