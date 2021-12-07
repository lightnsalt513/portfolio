import compStyle from './Contact.scss';

const Contact = function ($container) {
  if (!(this instanceof Contact)) {
    return new Contact;
  }
  
  const defParams = {
    $container: $container ? $container : document.getElementById('app'),
    
  };
  this.opts = { ...defParams };
  this.init(); 
}

Contact.prototype = {
  init: function () {
    this.setElements();
  },
  setElements: function () {
    this.$container = this.opts.$container.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.contact);
    this.$container.innerHTML = `
      <div>
      </div>
    `;
  },
  show: function () {
    this.$container.style.display = '';
  },
  hide: function () {
    this.$container.style.display = 'none';
  }
};

export default Contact;