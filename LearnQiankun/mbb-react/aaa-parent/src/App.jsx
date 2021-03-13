import React, { lazy } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { withSuspense } from "./utils/with-suspense";
import One from "./pages/One";
import Two from "./pages/Two";

// import BbbChild from "./pages/BbbChild";
const BbbChild = lazy(() => import("./pages/BbbChild"));

const routes = [
  { path: "/one", component: One },
  { path: "/two", component: Two },
  { path: "/bbb-child", component: withSuspense(BbbChild) },
];

const App = () => {
  return (
    <div>
      <div>this is app.</div>
      <div>
        {routes.map((route, index) => (
          <Link style={{ marginRight: "10px" }} key={index} to={route.path}>
            {route.path}
          </Link>
        ))}
        <Link style={{ marginRight: "10px" }} to="/bbb-child/one">
          /bbb-child/one
        </Link>
      </div>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default App;
