// import compStyle from './About.scss';

const ContentSection = function ($container) {
  if (!(this instanceof ContentSection)) {
    return new ContentSection;
  }
  
  this.$wrapper = $container.appendChild(document.createElement('section'));
}

ContentSection.prototype = {
  show: function () {
    this.$wrapper.style.display = '';
  },
  hide: function () {
    this.$wrapper.style.display = 'none';
  }
};

export default ContentSection;