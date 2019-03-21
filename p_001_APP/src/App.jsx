import * as React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute, Login } from './components';
import { ForumView } from './views';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory()}>
          <PrivateRoute exact path="/" component={ForumView}/>
          <Route path="/login" component={Login}/>
        </Router>
      </div>
    );
  }
}

export default App;
