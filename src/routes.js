import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto/cadastro" component={Produtos} />
      </Switch>
    </HashRouter>
  );
}