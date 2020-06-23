const PRODUTOS = '_PRODUTOS_';

function ErrorException(errors) {
  this.errors = errors;
}

export default class ProdutoService {

  validaCampos = (produto) => {
    const errors = [];

    console.log(produto);

    if(!produto.nome) {
      errors.push('O campo Nome é obrigatório');
    }

    if(!produto.sku) {
      errors.push('O campo SKU é obrigatório');
    }

    if(!produto.descricao) {
      errors.push('O campo Descrição é obrigatório');
    }

    if(!produto.preco || produto.preco <= 0) {
      errors.push('O campo Preço deve ter um valor valido maior que zero (0)');
    }

    if(!produto.fornecedor) {
      errors.push('O campo Fornecedor é obrigatório');
    }

    if(errors.length > 0) {
      throw new ErrorException(errors);
    }
  }

  index = () => {
    let produtos = localStorage.getItem(PRODUTOS);
    
    return JSON.parse(produtos);
  }

  findOne = (sku) => {
    let produtos = localStorage.getItem(PRODUTOS);
    
    return JSON.parse(produtos).filter(produto => produto.sku === sku);
  }

  salvar = (produto) => {
    this.validaCampos(produto);

    let produtos = localStorage.getItem(PRODUTOS);

    if(!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    produtos.push(produto);

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
  }

}