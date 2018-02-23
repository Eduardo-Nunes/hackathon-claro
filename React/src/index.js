import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import './index.css';
import {ListUser} from './containers/ListUser';
import {FormCreatedUser} from './containers/FormCreatedUser';


import registerServiceWorker from './registerServiceWorker';
import {store} from './store/configStore';

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<div className="signin-card">
			<Router history={history}>
		      <Route path="users" component={FormCreatedUser} />
		      <Route path="/" component={ListUser}/>
		    </Router>
		</div>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
