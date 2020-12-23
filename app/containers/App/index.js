/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { Layout } from 'containers/Layout';
import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Chakra-UI Boilerplate"
        defaultTitle="Chakra-UI Boilerplate"
      >
        <meta
          name="description"
          content="A React.js Boilerplate with Chakra-UI application"
        />
      </Helmet>

      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </div>
  );
}
