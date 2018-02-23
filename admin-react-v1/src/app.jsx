import React, { Component } from 'react';

import { Router, browserHistory } from 'react-router';
import routes from './router';

class App extends Component {
  render() {
    return (
         <Router routes={routes} history={browserHistory} />
    );
  }
}

export default App;