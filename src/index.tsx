import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import './css/rootIndex/index.css';
import App from './rootApp/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement);
serviceWorker.unregister();
