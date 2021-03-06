import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import 'tachyons'
import { routes as routesArray } from './Routes'
import { IRoute } from '../types/rootApp/index'


const routes = routesArray()

export default function App(): JSX.Element {
  
  const PublicRoutes: Array<JSX.Element> =
    routes.map(({path, Component, exact}) => {
    return <Route
              key={path}
              path={path}
              exact={exact}
              render={
                props =>
                  <Component {...props} />
              }
            />
    })

  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      {PublicRoutes}
    </Switch>
    </React.Suspense>
  )
}