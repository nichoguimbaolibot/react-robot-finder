import * as React from 'react'

const RoboFinder = React.lazy(() => import('../containers/RoboFinder'))

export const routes = () => [
    {
      path: '/home',
      component: RoboFinder,
      exact: true,
    }
  ]