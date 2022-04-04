import { templates, settings  } from '../settings.js';

class Products {
  constructor(element) {
    const thisProducts = this;
    
    thisProducts.render(element);
    thisProducts.initData();
  }

 
    
  render(element) {
    const thisProducts = this;
    
    /* generate HTML based on template */
    const generatedHTML = templates.products();
    
    thisProducts.dom = {};
    thisProducts.dom.wrapper = element;
    thisProducts.dom.wrapper.innerHTML = generatedHTML;

  }
 
  initData() {
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.renderProducts(parsedResponse);
      });
  }
  renderProducts(products) {
    const productsList = document.querySelector('.products');

    for(let product of products){
      const html= templates.product(product);
      productsList.innerHTML+=html;
    }
  }
}

export default Products;