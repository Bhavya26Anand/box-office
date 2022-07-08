import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Starred from './pages/Starred';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>404 error</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
