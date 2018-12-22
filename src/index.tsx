import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import './css/rootIndex/index.scss';
import App from './rootApp/App';
import { getSearchField } from './reducers'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

function configureStore(initialState?: object) {
  // const middlewares = [epicMiddleware];


  // return createStore(getSearchField, initialState!)
}

const Main: React.SFC<any> = () => {
  return (
  // <Provider store={store}>
    <Router>
      <App />
    </Router>
  // </Provider>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement);
serviceWorker.unregister();
