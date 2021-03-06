import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../containers/main';
import DashboardPage from '../containers/pages/dashboard';
import ReviewsPage from "../containers/pages/reviews";
import ReviewDetailsPage from "../containers/pages/reviews/details";

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={DashboardPage} />
    <Route path="dashboard" component={DashboardPage}/>
    <Route path="reviews" component={ReviewsPage}/>
    <Route path="reviews/:id" component={ReviewDetailsPage}/>
  </Route>
);