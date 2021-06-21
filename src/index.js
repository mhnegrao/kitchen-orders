import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/404';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>

    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
