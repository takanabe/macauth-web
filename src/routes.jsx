import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Search from '../containers/Search';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound.jsx';


export default (

<Route  path="/" component={App} >
  <IndexRoute component={Register} />
  <Route path="registration" component={Register} />
  <Route path="search" component={Search} />
  <Route path="*" component={NotFound} />
</Route>
);
