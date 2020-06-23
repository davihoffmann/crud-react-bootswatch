import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import CadastroProdutos from './pages/CadastroProdutos';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto" exact component={Produtos} />
        <Route path="/produto/cadastro" exact component={CadastroProdutos} />
      </Switch>
  );
}