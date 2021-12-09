import ContentSection from './ContentSection';
const Contact = function ($wrapper) {
  if (!(this instanceof Contact)) {
    return new Contact;
  }
  
  ContentSection.call(this, $wrapper);
  this.init(); 
}

Contact.prototype = Object.create(ContentSection.prototype, {
  init: {
    configurable: false,
    value: function () {
    this.setElements();
    }
  },
  setElements: {
    configurable: false,
    value: function () {
      this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.contact);
    this.$container.innerHTML = `
      <div>
      </div>
    `;
  }
  }
});

Contact.prototype.constructor = Contact;

export default Contact;