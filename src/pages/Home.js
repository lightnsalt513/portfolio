import compStyle from './Home.scss';

const Home = function ($container) {
  if (!(this instanceof Home)) {
    return new Home;
  }
  
  const defParams = {
    $container: $container ? $container : document.getElementById('app'),
    
  };
  this.opts = { ...defParams };
  this.init(); 
}

Home.prototype = {
  init: function () {
    this.setElements();
  },
  setElements: function () {
    this.$container = this.opts.$container.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.home);
    this.$container.innerHTML = `
      <div class=${compStyle.home__inner}>
        <div class=${compStyle.home__section}>
          <div class=${compStyle['home__section-bg']}>
          </div>
          <div class=${compStyle['home__section-content']}>
            <h2 class=${compStyle['is-loaded']}>어서오세요, <strong><span>재경</span>의 <span>포트폴리오</span>를 </strong>방문 주셔서 감사합니다</h2>
            <p>HTML / CSS / JavaScript</p>
          </div>
        </div>
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

export default Home;