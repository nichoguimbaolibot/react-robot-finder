import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
import { routes } from './Routes'
import { IRoute } from '../types/rootApp/index'

const RoboFinder = React.lazy(() => import('../containers/RoboFinder'))

const routers = routes()

export default function App(): JSX.Element {
  // @ts-ignore
  
  const routesMap: Array<JSX.Element> = routers.map(({path, Component, exact}) => {
    return <Route key={path} path={path} render={props => <RoboFinder {...props} />} exact={exact} />
  })

  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      {/* <Route path="/home" exact={true} render={props => <RoboFinder {...props} />} /> */}
      {routesMap}
    </Switch>
    </React.Suspense>
  )
}