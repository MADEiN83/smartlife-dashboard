import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./router.config";
import { IRouteArgs } from "./router.interfaces";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          {routes.map((route: IRouteArgs) => (
            // eslint-disable-next-line
            <Route {...route} />
          ))}

          {/* <Route component={Error404} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
