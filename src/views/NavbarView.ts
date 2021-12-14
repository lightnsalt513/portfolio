import { MenuModel } from '../models/MenuModel';
import compStyle from './NavbarView.scss';

export class NavbarView<T> {
  $container: HTMLElement;
  $navMenu: HTMLElement;
  $navMenuItems: NodeList;
  $logo: HTMLElement;
  homeIdx: number = 0;
  currentLocation: string = '/';
  selectedClass: string = 'is-selected';

  constructor(public $wrapper: Element, public model: MenuModel) {
    this.setElements();
    this.bindEvents();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.navbar);
    this.$container.innerHTML = `
      <div class=${compStyle.navbar__box}>
        <h1 class=${compStyle.navbar__logo}>
          <a href="/">
            <span>[</span>Jay's<span>]</span>
            <div>Portfolio</div>
          </a>
        </h1>
        <nav class=${compStyle.navbar__nav}>
          ${this.model.data.list.map((menu, i) => {
            if (i === this.homeIdx) return;
            return `
              <div class=${compStyle['navbar__nav-menu']}>
                <a href="${menu.location}" data-idx="${i}">${menu.name}</a>
              </div>
            `;
          }).join('')}
        </nav>
      </div>
    `;

    this.$navMenu = this.$container.querySelector(`.${compStyle.navbar__nav}`);
    this.$navMenuItems = this.$navMenu.querySelectorAll('a');
    this.$logo = this.$container.querySelector(`.${compStyle.navbar__logo} a`);
  }
  
  bindEvents(): void {
    window.addEventListener('DOMContentLoaded', this.onHashChange.bind(this));
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    this.$navMenu.addEventListener('click', this.onMenuClick.bind(this));
    this.$logo.addEventListener('click', this.onMenuClick.bind(this));
    this.model.on('menuChange', () => {
      this.changeSelection();
    });
  }

  onMenuClick(e: Event): void {
    const $target = e.target as HTMLElement;
    let idx: number;
    if ($target.tagName !== 'A') return;
    if ($target.parentElement.classList.contains(compStyle.navbar__logo)) {
      e.preventDefault();
      window.history.pushState({data: 'pushState1'}, '', "/");
      this.currentLocation = '/';
      idx = 0;
    } else {
      idx = Number($target.getAttribute('data-idx'));
    }
    this.model.changeSelected('idx', idx);
  }

  onHashChange(e: Event): void {
    if (this.currentLocation !== window.location.hash) {
      if (window.location.hash === '') {
        this.$logo.click();
        this.$logo.focus();
      } else {
        this.$navMenuItems.forEach((item: HTMLElement) => {
          const hash = (item as HTMLAnchorElement).hash;
          if (hash === window.location.hash) {
            item.click();
            item.focus();
          }
        });
      }
    }
  }
  
  changeSelection(): void {
    const selectedIdx = this.model.data.selected.idx;
    this.$navMenuItems.forEach((item: HTMLElement) => item.classList.remove(`${compStyle[this.selectedClass]}`));
    if (selectedIdx === 0) {
      window.location.hash = '';
      return;
    };
    this.$navMenuItems.forEach((item: HTMLElement) => {
      const idx = Number(item.getAttribute('data-idx'));
      if (idx === selectedIdx) {
        window.location.hash = this.model.data.list.find(item => item.idx === idx).location;
        item.classList.add(`${compStyle[this.selectedClass]}`);
      }
    });
  }
}