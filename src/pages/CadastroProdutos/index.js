import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Alert from '../../components/Alert';
import Card from '../../components/Card';

import ProdutoService from '../../services/ProdutoService';

const Produto = {
  nome: '',
  sku: '',
  descricao: '',
  preco: 0,
  fornecedor: '',
  gravou: false
}

class CadastroProdutos extends Component {
  state =  { 
    Produto, 
    gravou: false,
    errors: [],
    isUpdate: false
  };

  constructor() {
    super();

    this.service = new ProdutoService();
  }

  componentDidMount() {
    const { sku } = this.props.match.params
    
    if(sku) {
      const produto = this.service.findOne(sku);
      if(produto.length === 1) {
        this.setState({...produto[0], isUpdate: true});
      }
    }
  }

  handleChange = (e) => {
    const valor = e.target.value;
    const campoNome = e.target.name;

    this.setState({ ...this.state, [campoNome]: valor });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { nome, sku, descricao, preco, fornecedor } = this.state;

    const produto = {
      nome,
      sku,
      descricao,
      preco,
      fornecedor,
    }

    try {
      this.service.salvar(produto);
      this.handleCleanFields();
      this.setState({ gravou: true, errors: [] });
    } catch(err) {
      const errors = err.errors;
      this.setState({ errors });
    }
  }

  handleCleanFields = () => {
    this.setState(Produto);
  }

  render() {
    const { nome, sku, descricao, preco, fornecedor, gravou, errors, isUpdate } = this.state;

    return (
      <Card title={isUpdate ? 'Atualizando Produto' : 'Cadastro de Produtos'}>
        {
          gravou 
            && <Alert type="alert-success" title="Sucesso!" mesage="cadastrado realizado com sucesso!" />
        }{
          errors && errors.length > 0 && errors.map(error => {
            return (
              <Alert key={error} type="alert-danger" title="Erro!" mesage={error} />
            );
          })
        }

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
                disabled={isUpdate}
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
      </Card>
    );
  }
}

export default withRouter(CadastroProdutos);