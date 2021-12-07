import Router from './components/Router.js';
import Navbar from './components/Navbar.js';
import appStyle from './styles/global.scss';

const App = function () {
  this.state = {
    location: '/',
    pageLoaded: true
  }

  const $app = document.getElementById('app');
  $app.classList.add(appStyle.app);

  const setLocation = (loc) => {
    if (this.state.location !== loc) {
      this.state.location = loc;
      $app.dispatchEvent(stateChangeEvent);
    }
  }

  const stateChangeEvent = new CustomEvent('onStateChange', {
    bubbles: true,
    detail: {
      state: this.state
    }
  });
  $app.addEventListener('onStateChange', () => false);


  // observer pattern 구현 with router,,,
  // router는 this.state의 location에 listening할 것
  new Navbar(setLocation);
  new Router(this.state, 'onStateChange');

};

new App();