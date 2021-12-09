import compStyle from './Navbar.scss';

const Navbar = function ($container, onClick, menus, urls) {
  if (!(this instanceof Navbar)) {
    return new Navbar;
  }
  
  const defParams = {
    $container: $container,
    menus: menus || ['About', 'Projects', 'Contact'],
    urls: urls || ['/about', '/projects', '/contact'],
    callback : onClick,
    seletedClass: compStyle['is-selected'],
    currentIdx: null
  };
  this.opts = { ...defParams };
  this.init();
};

Navbar.prototype = {
  init: function () {
    this.setElements();
    this.bindEvents();
  },
  setElements: function () {
    this.$container = this.opts.$container.insertAdjacentElement('afterbegin', document.createElement('div'));
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
          ${this.opts.menus.map((menu, i) => {
            return `
              <div class=${compStyle['navbar__nav-menu']}>
                <a href="${this.opts.urls[i]}" data-idx="${i}">${menu}</a>
              </div>
            `;
          }).join('')}
        </nav>
      </div>
    `;

    this.$navMenu = this.$container.querySelector(`.${compStyle.navbar__nav}`);
    this.$navMenuItems = this.$navMenu.querySelectorAll('a');
    this.$logo = this.$container.querySelector(`.${compStyle.navbar__logo} a`);
  },
  onMenuClick: function (e) {
    e.preventDefault();
    const $target = e.target;
    if ($target.tagName !== 'A') return;
    if ($target.parentNode.classList.contains(compStyle.navbar__logo)) {
      this.opts.callback('/');
      if (this.opts.currentIdx !== null) {
        this.$navMenuItems[this.opts.currentIdx].classList.remove(this.opts.seletedClass);
      }
      this.opts.currentIdx = null;
      return;
    }
    const idx = $target.getAttribute('data-idx');
    const url = this.opts.urls[idx];
    if (idx !== this.opts.currentIdx) {
      if (this.opts.currentIdx !== null) {
        this.$navMenuItems[this.opts.currentIdx].classList.remove(this.opts.seletedClass);
      }
      $target.classList.add(this.opts.seletedClass);
      this.opts.currentIdx = idx;
      this.opts.callback(url);
    }
  },
  bindEvents: function () {
    this.$navMenu.addEventListener('click', this.onMenuClick.bind(this));
    this.$logo.addEventListener('click', this.onMenuClick.bind(this));
  },
  unbindEvents: function () {
    this.$navMenu.removeEventListener('click', this.onMenuClick.bind(this));
    this.$logo.removeEventListener('click', this.onMenuClick.bind(this));
  }
};

export default Navbar;