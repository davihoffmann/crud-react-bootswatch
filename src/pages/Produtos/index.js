import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProdutoService from '../../services/ProdutoService';

class Produtos extends Component {
  state = {
    produtos: [],
  }

  constructor(){
    super();
    this.service = new ProdutoService();
  }

  // Busca os produtos
  componentDidMount() {
    const produtos = this.service.index();

    this.setState({
      produtos,
    })
  }

  editar = (sku) => {
    this.props.history.push(`/produto/cadastro/${sku}`);
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
                produtos.map((produto, index) => (
                  <tr key={index}>
                    <td>{produto.nome}</td>
                    <td>{produto.sku}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.fornecedor}</td>
                    <td>
                      <button onClick={() => this.editar(produto.sku)} className="btn btn-primary">Editar</button>
                      <button className="btn btn-danger">Remover</button>
                    </td>
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

export default withRouter(Produtos)