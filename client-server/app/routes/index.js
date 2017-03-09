import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageEdit from 'components/page_edit/editPage.jsx';
import PageIndex from 'components/page_index/index.jsx';

export default (
  <Route path="/">
    <IndexRoute component={PageIndex}/>
    <Route path="/edit/:id" component={PageEdit}/>
  </Route>
);

