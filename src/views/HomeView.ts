import compStyle from './HomeView.scss';

export class HomeView {
  $container: HTMLElement;
  
  constructor(public $wrapper: HTMLElement) {
    this.setElements();
  }

  setElements(): void {
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