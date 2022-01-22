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
        <p>
          한 웹에이전시의 퍼블리셔로 일한 4년반. 이 중 3년은 삼성전자 프로젝트들을 다수 진행하며 <strong>반응형 UI</strong>, <strong>웹접근성</strong> 그리고 <strong>글로벌 확장성</strong> 대응에 대한 숙련도를 높였고,
          또 해당 기간 중 1여년은 JavaScript 개발 업무까지 진행해 볼 수 있는 기회를 잡으면서 프론트엔드 개발자로 성장하고자 하는 의지를 굳혔습니다.
        </p>
        <p>
          어렵거나 부족한 기획/디자인 요건이라도 최대한 구현해 낼 수 있는 방법을 찾거나 좋은 대안을 찾아 제안하는 등 <strong>문제해결</strong>하는 것에 큰 보람을 느낍니다. 
          현재는 JavaScript에 대한 공부와 React, TypeScript 를 학습하고 있으며 요즘은 구현 방법을 넘어 좋은 '설계'가 어떤것인지에 대한 궁금증이 있습니다.
        </p>
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
            <li># jQuery</li>
            <li># React</li>
            <li># TypeScript</li>
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
              <dd><em style="width:70%"><span>70%</span></em></dd>
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