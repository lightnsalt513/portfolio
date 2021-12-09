import ContentSection from './ContentSection';
const Projects = function ($wrapper) {
  if (!(this instanceof Projects)) {
    return new Projects;
  }
  
  ContentSection.call(this, $wrapper);
  this.init(); 
}

Projects.prototype = Object.create(ContentSection.prototype, {
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
    this.$container.classList.add(compStyle.projects);
    this.$container.innerHTML = `
      <div>
      </div>
    `;
  }
  }
});

Projects.prototype.constructor = Projects;

export default Projects;