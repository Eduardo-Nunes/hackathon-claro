import React from 'react';
import { render } from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './router';

injectTapEventPlugin();

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);