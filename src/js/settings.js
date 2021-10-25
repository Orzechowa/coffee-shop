export const select = {
  templateOf: {
    home: '#template-home-widget',
    products: '#template-product-widget',
    contact: '#template-contact-widget',
    product: '#template-product',
  },
  containerOf: {
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
    sides: '#sides',

  },
  nav: {
    links: '.main-nav a',
  }, 

    
};

export const classNames ={
  nav: {
    active: 'active',
  },
  sides: {
    active: 'active',

  }
};
  
export const settings = {
  
  db: {
    //url: '//localhost:3131',
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};
  
export const templates = {
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
      
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
    
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),

  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
  
};
  