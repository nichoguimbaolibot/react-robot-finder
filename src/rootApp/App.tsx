import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
import { routes } from './Routes'
import { IRoute } from '../types/rootApp/index'

export default function App(): JSX.Element {
  // @ts-ignore
  let routesMap: Array<JSX.Element> = routes.map(({path, Component, exact}) => {
    return <Route key={path} path={path} component={Component} exact={exact} />
  })


  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      {routesMap}
    </Switch>
    </React.Suspense>
  )
}