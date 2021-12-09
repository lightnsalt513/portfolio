import compStyle from './Home.scss';
import ContentSection from './ContentSection';

const Home = function ($wrapper) {
  if (!(this instanceof Home)) {
    return new Home;
  }
  
  ContentSection.call(this, $wrapper);
  this.init();
}

Home.prototype = Object.create(ContentSection.prototype, {
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
    }
  }
});

Home.prototype.constructor = Home;

export default Home;