import compStyle from './Projects.scss';

const Projects = function ($container) {
  if (!(this instanceof Projects)) {
    return new Projects;
  }
  
  const defParams = {
    $container: $container ? $container : document.getElementById('app'),
    
  };
  this.opts = { ...defParams };
  this.init(); 
}

Projects.prototype = {
  init: function () {
    this.setElements();
  },
  setElements: function () {
    this.$container = this.opts.$container.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.projects);
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

export default Projects;