import { templates } from '../settings.js';

class Contact {
  constructor(element) {
    const thisContact = this;
    
    thisContact.render(element);
  }

 
    
  render(element) {
    const thisContact = this;
    
    /* generate HTML based on template */
    const generatedHTML = templates.contact();
    
    thisContact.dom = {};
    thisContact.dom.wrapper = element;
    thisContact.dom.wrapper.innerHTML = generatedHTML;

  }
    
}

export default Contact;