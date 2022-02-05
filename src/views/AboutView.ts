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
          공감을 기반으로하는 소통과 협업을 중시하는 Front-end 개발자 도재경입니다.
        </p>
        <p>
          대기업 글로벌 웹사이트 구축/운영 프로젝트 경험을 통해 다국어, 반응형, 웹접근성 대응 전문성을 쌓았으며,
          체계적이고 투명한 일정관리 및 커뮤니케이션 역량을 인정받아 다수의 프로젝트에서 마크업 리드로도 참여했습니다.
        </p>
        <p>
          공동의 목표를 가진 다양한 동료들과 유기적 협업을 통해 결과물을 만드는 일에 기쁨을 느끼며,
          새로운 환경과 상황에 기민하게 적응하고 도전적인 자세로 임합니다.
          퍼블리셔로 전향한 이후 4년 반 동안 꾸준한 자기 역량계발을 통해 JavaScript 개발자로까지 성장했습니다.
          그리고 지금까지의 경험들을 기반으로 더 크게 도전하고 함께 성장할 수 있는 환경에서 멋진 FE 개발자가 되길 희망합니다. 
        </p>
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