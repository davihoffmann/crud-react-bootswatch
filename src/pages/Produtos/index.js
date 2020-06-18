import React, { Component } from 'react';

const Produto = {
  nome: '',
  sku: '',
  descricao: '',
  preco: 0,
  fornecedor: '',
}

class Produtos extends Component {
  state = Produto;

  handleChange = (e) => {
    const valor = e.target.value;
    const campoNome = e.target.name;

    this.setState({ [campoNome]: valor });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  }

  handleCleanFields = () => {
    this.setState(Produto)
  }

  render() {
    const { nome, sku, descricao, preco, fornecedor } = this.state;

    return (
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Cadastro de Produtos</div>
        <div className="card-body">
          
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input 
                  type="text" 
                  value={nome} 
                  name="nome"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input 
                  type="text" 
                  value={sku} 
                  name="sku"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição: *</label>
                <textarea 
                  value={descricao} 
                  className="form-control" 
                  name="descricao"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input 
                  type="text" 
                  value={preco} 
                  className="form-control"
                  name="preco"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input 
                  type="text" 
                  value={fornecedor} 
                  className="form-control"
                  name="fornecedor" 
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={this.handleSubmit}>
              Gravar
            </button>

            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={this.handleCleanFields}>
              Limpar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Produtos;