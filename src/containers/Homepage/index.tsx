import * as React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/SearchBox'
// import LinkList from './components/LinkList'

const Homepage: React.SFC<any> = (props) => {
  const [text, setText] = React.useState("Unknown")

  function handleTextChange(e: React.SyntheticEvent<HTMLInputElement>): void {
    setText(e.currentTarget.value)
  }


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
      <div className="input-text">
        <Input value={text} onChange={handleTextChange} />
      </div>
      <div className="text-value">
        {text}
      </div>
    </section>
  )
}

export default Homepage