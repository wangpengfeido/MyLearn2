import React, { lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { withSuspense } from "../utils/with-suspense";

const BbbChildOne = lazy(() => import("./BbbChild/BbbChildOne"));

const BbbChild = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <div>this is bbb-child.</div>
      <Switch>
        <Route
          path="/bbb-child/one"
          component={withSuspense(BbbChildOne)}
        ></Route>
        <Route path="/bbb-child/">
          <div id="bbb-child-container" style={{ border: "1px" }}></div>
        </Route>
      </Switch>
    </div>
  );
};

export default BbbChild;
