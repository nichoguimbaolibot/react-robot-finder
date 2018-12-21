import * as React from 'react'
import { Link } from 'react-router-dom'
// import LinkList from './components/LinkList'

const Homepage: React.SFC<JSX.Element> = () => {
  return (
    <section className="homepage-section">
      <div className="link-list">
      <ul className="unordered-link-list">
        <li className="link-item">
          <Link to="/robofinder">
            RoboFinder
          </Link>
        </li>
        <li className="link-item">
          <Link to="/">
            Home
          </Link>
        </li>
      </ul>
      </div>
    </section>
  )
}

export default Homepage