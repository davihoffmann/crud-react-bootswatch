import React, { Component } from 'react';

import ProdutoService from '../../services/ProdutoService';

export default class Produtos extends Component {
  state = {
    produtos: [],
  }

  constructor(){
    super();
    this.service = new ProdutoService();
  }

  componentDidMount() {
    const produtos = this.service.index();

    this.setState({
      produtos,
    })
  }

  render() {
    const { produtos } = this.state;

    return (
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Cadastro de Produtos</div>
        <div className="card-body">

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                produtos.map(produto => (
                  <tr key={produto.sku}>
                    <td>{produto.nome}</td>
                    <td>{produto.sku}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.fornecedor}</td>
                    <td></td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
      </div>
    );
  }

}