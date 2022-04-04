import { templates, settings } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;
    
    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.initData();  
  }

 
    
  render(element) {
    const thisHome = this;
    
    /* generate HTML based on template */
    const generatedHTML = templates.home();
    
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

  }

  initWidgets(){
    const thisHome = this;

    setTimeout(() => {
      thisHome.element = document.querySelector('.main-carousel');
      thisHome.flkty = new Flickity(thisHome.element, {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 3000,
        cellAlign: 'left',
        contain: true,
      });
    }, 2000);

    
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
    const productsList = document.querySelector('.box-main');

    for(let product of products){
      const html= templates.product(product);
      productsList.innerHTML+=html;
    }
  }
    
}

export default Home;
