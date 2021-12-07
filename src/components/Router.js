import Home from '../pages/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import compStyle from './Router.scss';

// address bar에서 location 이동 구현

const Router = function (initState, stateChangeEvent) {
  if (!(this instanceof Router)) {
    return new Router;
  }
  this.currentPage = null;
  this.state = initState

  this.$router = document.getElementById('app').appendChild(document.createElement('div'));
  this.$router.classList.add(compStyle.router);

  const switchPage = (page, Construct) => {
    if (this.currentPage !== null) this.currentPage.hide();
    if (this[page] === undefined) {
      this[page] = new Construct(this.$router);
    } else {
      this[page].show()
    }
    this.currentPage = this[page];
  }

  document.addEventListener(stateChangeEvent, (e) => {
    checkLocation(e.detail.state.location);
  });

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
        console.log('Page not found');
    }
  }

  checkLocation(this.state.location);


};

export default Router;