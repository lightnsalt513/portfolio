import { MenuModel } from '../models/MenuModel';
import { HomeView } from './HomeView';
import { AboutView } from './AboutView';
import { ProjectsView } from './ProjectsView';
import { debounce, scrollTo, throttle } from '../helpers/utils';
import compStyle from './ContentListView.scss';

interface ContentModule {
  setElements(): void;
}

const viewsArray = [HomeView, AboutView, ProjectsView];

export class ContentListView {
  $container: HTMLElement;
  $sections: NodeList;
  currentIdx: number;
  sectionsBorder: number[] = [];
  childrenModules: ContentModule[] = [];
  
  constructor(public $wrapper: HTMLElement, public model: MenuModel) {
    this.currentIdx = model.data.selected.idx;
    this.setElements();
    this.setChildrenElements();
    this.calculateSectionsBorder();
    this.bindEvents();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.contents);
  }

  setChildrenElements(): void {
    for (const module of viewsArray) {
      const $elem = document.createElement('section');
      $elem.classList.add(compStyle.contents__section);
      new module($elem);
      this.$container.appendChild($elem);
    }
    this.$sections = this.$wrapper.querySelectorAll(`.${compStyle.contents__section}`);
  }

  bindEvents(): void {
    window.addEventListener('resize', debounce(this.onResize.bind(this), 150));
    this.model.on('menuChange', () => {
      this.gotoSection(this.model.data.selected.idx);
    });
    this.$container.addEventListener('wheel', throttle(() => {
      this.checkSection();
    }, 200))
  }

  calculateSectionsBorder(): void {
    this.sectionsBorder = [];
    for (let i = 0, max = this.$sections.length; i < max; i++) {
      const top = (this.$sections[i] as HTMLElement).getBoundingClientRect().top + this.$container.scrollTop;
      this.sectionsBorder.push(top);
    }
  }

  checkSection(): void {
    for (let i = 0, max = this.sectionsBorder.length; i < max; i++) {
      const currentTop = this.$container.scrollTop;
      
      if (this.sectionsBorder[i] <= currentTop) {
        if (this.sectionsBorder[i + 1] > currentTop || i === max - 1) {
          if (this.currentIdx !== i) {
            this.currentIdx = i;
            this.model.changeSelected('idx', i);
          }
          break;
        }
      }
    }
  }

  gotoSection = (idx: number): void => {
    if (this.currentIdx !== idx) {
      this.currentIdx = idx;
      scrollTo(this.sectionsBorder[idx], true, this.$container);
    }
  }

  onResize(): void {
    this.calculateSectionsBorder();
  }
}