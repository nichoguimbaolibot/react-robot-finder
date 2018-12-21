import * as React from 'react'
import { Link } from 'react-router-dom'

export default function LinkList(): JSX.Element {
  return (
    <ul>
      <li><Link to="/robofinder">RoboFinder</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  )
}