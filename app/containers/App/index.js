/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StringPage from 'containers/StringPage/Loadable';
import NewStringPage from 'containers/NewStringPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/NavBar';
import Page from 'components/Page';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Page>
        <Switch>
          <Route exact path="/" component={StringPage} />
          <Route exact path="/add" component={NewStringPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Page>
      <GlobalStyle />
    </div>
  );
}
