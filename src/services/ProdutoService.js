const PRODUTOS = '_PRODUTOS_';

function ErrorException(errors) {
  this.errors = errors;
}

export default class ProdutoService {
  validaCampos = (produto) => {
    const errors = [];

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

    if(!produtos) {
      return [];
    }
    
    return JSON.parse(produtos);
  }

  findOne = (sku) => {
    let produtosStorage = localStorage.getItem(PRODUTOS);

    let produtos = JSON.parse(produtosStorage)
    
    if(produtos) {
      let produto = produtos.filter(p => p.sku === sku);
      return produto;
    }
    
    return {};
  }

  obterIndex = (sku) => {
    let index = null;
    this.index().forEach((produto, i) => {
      if(produto.sku === sku) {
        index = i;
      }
    });
    return index;
  }

  salvar = (produto) => {
    this.validaCampos(produto);

    let produtos = localStorage.getItem(PRODUTOS);

    if(!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    const indexProd = this.obterIndex(produto.sku);
    if(indexProd === null) {
      produtos.push(produto);
    } else {
      produtos[indexProd] = produto;
    }

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
  }

}