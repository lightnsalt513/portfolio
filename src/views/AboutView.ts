import compStyle from './AboutView.scss';

export class AboutView {
  $container: HTMLElement;
  
  constructor(public $wrapper: HTMLElement) {
    this.setElements();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.about);
    this.$container.innerHTML = ``;
  }
}