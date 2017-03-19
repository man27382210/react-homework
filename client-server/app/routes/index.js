import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageEdit from '../components/page_edit/editPage.jsx';
import PageIndex from '../components/page_index/index.jsx';
import App from '../components/app.jsx';
import PageNotFound from '../components/common/notFound.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex}/>
    <Route path="/edit/:index" component={PageEdit}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
);

