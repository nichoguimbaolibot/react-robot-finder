import * as React from 'react'

const RoboFinder = React.lazy(() => import('../containers/RoboFinder'))

export const routes = () => [
  {
      path: '/robofinder',
      component: RoboFinder,
      exact: true,
    }
  ]