import compStyle from './About.scss';

const About = function ($container) {
  if (!(this instanceof About)) {
    return new About;
  }
  
  const defParams = {
    $container: $container ? $container : document.getElementById('app'),
    
  };
  this.opts = { ...defParams };
  this.init(); 
}

About.prototype = {
  init: function () {
    this.setElements();
  },
  setElements: function () {
    this.$container = this.opts.$container.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.about);
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

export default About;