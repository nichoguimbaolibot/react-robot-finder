import * as React from 'react'
import Homepage from '../containers/Homepage'

const RoboFinder = React.lazy(() => import('../containers/RoboFinder'))

export const routes = () => [
    {
      path: '/robofinder',
      Component: RoboFinder,
      exact: true,
    },
    {
      path: '/',
      Component: Homepage,
      exact: true,
    }
  ]