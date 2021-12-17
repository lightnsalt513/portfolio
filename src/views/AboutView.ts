import compStyle from './AboutView.scss';

export class AboutView {
  $container: HTMLElement;
  
  constructor(public $wrapper: HTMLElement) {
    this.setElements();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.about);
    this.$container.innerHTML = `
      <div class=${compStyle.about__content}>
        <h2>About me</h2>
        <p>안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요 안녕하세요. 안녕하세요. 안녕하세요 안녕하세요. 안녕하세요. 안녕하세요 안녕하세요. 안녕하세요.
        안녕하세요안녕하세요. 안녕하세요. 안녕하세요 안녕하세요안녕하세요. 안녕하세요. 안녕하세요 안녕하세요안녕하세요. 안녕하세요. 안녕하세요 
        안녕하세요안녕하세요. 안녕하세요. 안녕하세요 안녕하세요안녕하세요. 안녕하세요. 안녕하세요안녕하세요안녕하세요. 안녕하세요. 안녕하세요</p>
        <div class=${compStyle.about__cta}>
          <a href="javascript:void(0)" title="새창열기: CV" target="_blank">Go to CV</a>
        </div>
        <div class=${compStyle.about__detail}>
          <ul class=${compStyle['about__detail-keyword']}>
            <li># Web Standard</li>
            <li># Web Accessibility</li>
            <li># CSS / SASS</li>
            <li># JavaScript</li>
            <li># ES6</li>
          </ul>
          <dl class=${compStyle['about__detail-skills']}>
            <div>
              <dt>Web</dt>
              <dd><em style="width:90%"><span>90%</span></em></dd>
            </div>
            <div>
              <dt>CSS/SASS</dt>
              <dd><em style="width:90%"><span>90%</span></em></dd>
            </div>
            <div>
              <dt>JavaScript</dt>
              <dd><em style="width:75%"><span>75%</span></em></dd>
            </div>
            <div>
              <dt>React</dt>
              <dd><em style="width:60%"><span>60%</span></em></dd>
            </div>
            <div>
              <dt>TypeScript</dt>
              <dd><em style="width:50%"><span>50%</span></em></dd>
            </div>
          </dl>
        </div>
      </div>
    `;
  }
}