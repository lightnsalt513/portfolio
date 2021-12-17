import compStyle from './ContactView.scss';

export class ContactView {
  $container: HTMLElement;
  
  constructor(public $wrapper: HTMLElement) {
    this.setElements();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.contact);
    this.$container.innerHTML = `
      <h2 class=${compStyle.contact__title}>Contact me</h2>
      <div class=${compStyle.contact__content}>
        <dl>
          <div class=${compStyle.contact__field}>
            <dt><span>Email</span><box-icon type='solid' name='envelope'></box-icon></dt>
            <dd><a href="mailto: jaydo1204@gmail.com" title="이메일 보내기">jaydo1204@gmail.com</a></dd>
          </div>
          <div class=${compStyle.contact__field}>
            <dt><span>Phone</span><box-icon name='mobile' ></box-icon></dt>
            <dd><a href="tel:010-9154-1651" title="전화하기">010-9154-1651</a></dd>
          </div>
          <div class=${compStyle.contact__field}>
            <dt><span>Address</span><box-icon name='home' type='solid' ></box-icon></dt>
            <dd>Seoul, Korea</dd>
          </div>
          <div class=${compStyle.contact__field}>
            <dt><span>Github</span><box-icon type='logo' name='github'></box-icon></dt>
            <dd><a href="https://github.com/lightnsalt513" target="_blank" title="새창열기: 재경의 깃허브">Go to Jay's Github</a></dd>
          </div>
        </dl>
      </div>
    `;
  }
}