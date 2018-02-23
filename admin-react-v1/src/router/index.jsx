import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../containers/main';
import DashboardPage from '../containers/pages/dashboard';
import HighlightsPage from '../containers/pages/highlights';
import ScreensPage from '../containers/pages/screens';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={DashboardPage} />
    <Route path="dashboard" component={DashboardPage}/>
    <Route path="highlights" component={HighlightsPage}/>
    <Route path="screens" component={ScreensPage}/>
  </Route>
);