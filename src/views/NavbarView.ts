import { MenuModel } from '../models/MenuModel';
import compStyle from './NavbarView.scss';
import avatarImage from '../assets/avatar.jpg';
import 'boxicons';
export class NavbarView<T> {
  $container: HTMLElement;
  $navMenu: HTMLElement;
  $navMenuItems: NodeList;
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
          <a href="/">Jay's Portfolio</a>
        </h1>
        <div class=${compStyle.navbar__content}>
          <div class=${compStyle[`navbar__content-img`]}>
            <img src=${avatarImage}>
          </div>
          <p class=${compStyle[`navbar__content-desc`]}>Jay Do / Front-end Developer <br>HTML / CSS / JavaScript</p>
        </div>
        <nav class=${compStyle.navbar__nav}>
          ${this.model.data.list.map((menu, i) => {
            return `
              <div class=${compStyle['navbar__nav-menu']}>
                <a href="${menu.location}" data-idx="${i}">${menu.name}</a>
              </div>
            `;
          }).join('')}
        </nav>
        <div class=${compStyle.navbar__icons}>
          <a href="mailto: jaydo1204@gmail.com" title="이메일 보내기">
            <box-icon type='solid' name='envelope'></box-icon>
          </a>
          <a href="https://github.com/lightnsalt513" target="_blank" title="새창열기: 재경의 깃허브">
            <box-icon type='logo' name='github'></box-icon>
          </a>
        </div>
      </div>
    `;

    this.$navMenu = this.$container.querySelector(`.${compStyle.navbar__nav}`);
    this.$navMenuItems = this.$navMenu.querySelectorAll('a');
  }
  
  bindEvents(): void {
    window.addEventListener('DOMContentLoaded', this.onHashChange.bind(this));
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    this.$navMenu.addEventListener('click', this.onMenuClick.bind(this));
    this.model.on('menuChange', () => {
      this.changeSelection();
    });
  }

  onMenuClick(e: Event): void {
    const $target = e.target as HTMLElement;
    if ($target.tagName !== 'A') return;
    let idx = Number($target.getAttribute('data-idx'));
    this.model.changeSelected('idx', idx);
  }

  onHashChange(e: Event): void {
    if (this.currentLocation !== window.location.hash) {
      this.$navMenuItems.forEach((item: HTMLElement) => {
        const hash = (item as HTMLAnchorElement).hash;
        if (hash === window.location.hash) {
          item.click();
          item.focus();
        }
      });
    }
  }
  
  changeSelection(): void {
    const selectedIdx = this.model.data.selected.idx;
    this.$navMenuItems.forEach((item: HTMLElement) => {
      const idx = Number(item.getAttribute('data-idx'));
      if (idx === selectedIdx) {
        window.location.hash = this.model.data.list.find(item => item.idx === idx).location;
        item.classList.add(`${compStyle[this.selectedClass]}`);
      } else {
        item.classList.remove(`${compStyle[this.selectedClass]}`);
      }
    });
  }
}