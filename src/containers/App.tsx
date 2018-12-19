import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface IRobot {
  id: number,
  name: string,
  username: string,
  email: string,
}

interface IAppProps {
}

interface IAppState {
  robots: Array<IRobot>,
  searchfield: string,
}

declare namespace JSX {
  interface IntrinsicElements {
    SearchBox: { onChange: HTMLInputElement, }
  }
}


class App extends Component<IAppProps, IAppState> {
    state = {
      robots: [],
      searchfield: ''
    }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(robots => {this.setState({ robots })});
  }

  handleSearchChange = (event: any):void => {
    this.setState({ searchfield: event.target.value })
  }

  get filteredRobots() {
    let { robots, searchfield } = this.state
    let searchfieldLowerCase = searchfield.toLowerCase()
    let filteredRobots: Array<IRobot> = robots.filter((robot: IRobot) => {
      let robotNameLowerCase = robot.name.toLowerCase();
      return robotNameLowerCase.includes(searchfieldLowerCase)
      })
    return filteredRobots
  }

  render() {
    let { robots, searchfield } = this.state;
    
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchfield={searchfield} onChange={this.handleSearchChange}/>
          <Scroll>
            <CardList robots={this.filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;