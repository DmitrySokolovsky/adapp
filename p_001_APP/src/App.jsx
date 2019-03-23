import * as React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute, Login } from './components';
import { ForumView } from './views';
import { Provider } from 'react-redux';
import { appStore } from './store';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Provider store={appStore}>
        <Router history={createBrowserHistory()}>
          <PrivateRoute exact path="/" component={ForumView}/>
          <Route path="/login" component={Login}/>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
