import { lazy } from "react";
import { IRouteArgs } from "./router.interfaces";

export const ROUTE_KEYS = { HOME: "home", SIGN_IN: "sign-in" };

export const ROUTE_PATHS: { [x: string]: string } = {
  [ROUTE_KEYS.HOME]: "/",
  [ROUTE_KEYS.SIGN_IN]: "/sign-in",
};

const routes: IRouteArgs[] = [
  {
    key: ROUTE_KEYS.HOME,
    path: ROUTE_PATHS[ROUTE_KEYS.HOME],
    component: lazy(() => import("pages/home")),
    exact: true,
  },
  {
    key: ROUTE_KEYS.SIGN_IN,
    path: ROUTE_PATHS[ROUTE_KEYS.SIGN_IN],
    component: lazy(() => import("pages/signIn")),
    exact: true,
  },
];

export default routes;
