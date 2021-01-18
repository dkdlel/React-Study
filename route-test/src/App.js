import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import fire from './components/fire';
import bus from './components/bus';

const App = () => {

  return (
    <>
      <ul>
        <li>
          <Link to="/fire">fire</Link>
        </li>
        <li>
          <Link to="/bus">bus</Link>
        </li>
      </ul>
      <Switch>
        <Route path={'/fire'} component={fire} />
        <Route path={'/bus'} component={bus} />
      </Switch>
    </>
  )
}
export default App;
