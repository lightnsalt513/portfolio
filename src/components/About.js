import ContentSection from './ContentSection';
const About = function ($wrapper) {
  if (!(this instanceof About)) {
    return new About;
  }
  
  ContentSection.call(this, $wrapper);
  this.init(); 
}

About.prototype = Object.create(ContentSection.prototype);

About.prototype.init = function () {
    this.setElements();
};

About.prototype.setElements = function () {
  this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.about);
    this.$container.innerHTML = `
      <div>
      </div>
    `;
};

// About.prototype = Object.create(ContentSection.prototype, {
//   init: {
//     configurable: false,
//     value: function () {
//       this.setElements();
//     }
//   },
//   setElements: {
//     configurable: false,
//     value: function () {
//       this.$container = this.$wrapper.appendChild(document.createElement('div'));
//       this.$container.classList.add(compStyle.about);
//       this.$container.innerHTML = `
//         <div>
//         </div>
//       `;
//     }
//   }
// });

About.prototype.constructor = About;

export default About;