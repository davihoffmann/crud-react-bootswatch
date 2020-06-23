import React, { Component } from 'react';

export default class Produtos extends Component {
  state = {
    produtos: [],
  }

  render() {
    const { produtos } = this.state;

    return (
      <table className="table">
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
              <tr>
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
    );
  }

}