import { LazyExoticComponent } from "react";

export interface IRoute {
  path: string,
  component: JSX.Element,
  exact: boolean,
}

export interface IRoutes {
  routes: Array<IRoute>
}