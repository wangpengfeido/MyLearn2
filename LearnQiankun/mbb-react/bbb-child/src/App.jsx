import React from 'react';
import One from './pages/One';
import Two from './pages/Two';
import { Route, Switch, Link } from 'react-router-dom';

const routes = [
  { path: '/one', component: One },
  { path: '/two', component: Two },
];

const App = () => {
  return (
    <div>
      <div>this is app.</div>
      <div>
        {routes.map((route, index) => (
          <Link style={{ marginRight: '10px' }} key={index} to={route.path}>
            {route.path}
          </Link>
        ))}
      </div>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.component}></Route>
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default App;
