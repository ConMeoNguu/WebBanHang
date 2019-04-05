/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import ListPage from 'containers/ListPage';
import LoginPage from 'containers/LoginPage';
import ProductsPage from '../ProductsPage';
import GlobalStyle from '../../global-styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Switch>
        <Route exact path="/products" component={ProductsPage} />
      </Switch>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Switch>
        <Route exact path="/list" component={ListPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
