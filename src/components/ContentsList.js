import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import compStyle from './ContentsList.scss';

// address bar에서 location 이동 구현

const ContentsList = function ($container, initState, stateChangeEvent) {
  if (!(this instanceof ContentsList)) {
    return new ContentsList;
  }
  this.currentPage = null;
  this.state = initState

  this.$contentArea = $container.appendChild(document.createElement('div'));
  this.$contentArea.classList.add(compStyle.contents);

  const switchPage = (page, Construct) => {
    if (this.currentPage !== null) this.currentPage.hide();
    if (this[page] === undefined) {
      this[page] = new Construct(this.$contentArea);
    } else {
      this[page].show();
    }
    this.currentPage = this[page];
  }

  const checkLocation = (location) => {
    switch (location) {
      case '/':
        switchPage('pageHome', Home);
        break;
      case '/about':
        switchPage('pageAbout', About);
        break;
      case '/projects':
        switchPage('pageProjects', Projects);
        break;
      case '/contact':
        switchPage('pageContact', Contact);
        break;
      default:
        throw Error('Page not found!');
    }
  }

  document.addEventListener(stateChangeEvent, (e) => {
    checkLocation(e.detail.state.location);
  });

  checkLocation(this.state.location);
};

export default ContentsList;