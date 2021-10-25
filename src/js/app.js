import{ select, classNames} from './settings.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Products from './components/Products.js';

const app = {
  initPages: function() {
        
    const homeContainer = document.querySelector(select.containerOf.home);
    const productContainer = document.querySelector(select.containerOf.products);
    const contactContainer = document.querySelector(select.containerOf.contact);

    new Home(homeContainer);
    new Products(productContainer);
    new Contact(contactContainer);



  },
  
  initSide: function(){
       
    
    const sides = document.querySelector(select.containerOf.sides).children;
    const navLinks = document.querySelectorAll(select.nav.links);
    
    const idFromHash = window.location.hash.replace('#/', '');
        
    let sideMatchingHash = sides[0].id;
    
    for(let side of sides){
      if(side.id == idFromHash){
        sideMatchingHash = side.id;
        break;
      }
    }
        
    this.activateSide(sideMatchingHash);
    
    for(let link of navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
    
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
    
        /* run thisApp.activatePage with that id */
        this.activateSide(id);
    
        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
        
  },
    
  activateSide: function(sideId){
       
    const sides = document.querySelector(select.containerOf.sides).children;
    const navLinks = document.querySelectorAll(select.nav.links);

    /* add class "activate" to matching pages, remove from non-matching */
    for(let side of sides){
      side.classList.toggle(classNames.sides.active, side.id ==sideId);
    }
    /* add class "activate" to matching links, remove from non-matching */
    for(let link of navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + sideId
      );
    
    }
  },
    
  init: function() {
    this.initPages();
    this.initSide();
  },

  
};

app.init();