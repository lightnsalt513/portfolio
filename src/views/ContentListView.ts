import { MenuModel } from '../models/MenuModel';
import { AboutView } from './AboutView';
import { ProjectsView } from './ProjectsView';
import { debounce, scrollTo, throttle } from '../helpers/utils';
import compStyle from './ContentListView.scss';
import { ContactView } from './ContactView';
import { ProjectsModel } from '../models/ProjectsModel';

interface ViewConstructor {
    new (elem: HTMLElement, args?: any): ViewInterface;
}
interface ViewInterface {
    setElements(): void;
}

interface HasData {
  data: any[] | {};
}

export class ContentListView {
  $container: HTMLElement;
  $sections: NodeList;
  currentIdx: number;
  sectionsBorder: number[] = [];
  
  constructor(public $wrapper: HTMLElement, public model: MenuModel) {
    this.currentIdx = model.data.selected.idx;
    this.setElements();
    this.calculateSectionsBorder();
    this.bindEvents();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.contents);
    this.createSections(AboutView);
    this.createSections(ProjectsView, new ProjectsModel());
    this.createSections(ContactView);
    this.$sections = this.$container.querySelectorAll(`.${compStyle.contents__section}`);
  }

  createSections(module: ViewConstructor, model?: HasData): void {
    const $elem = document.createElement('section');
    $elem.classList.add(compStyle.contents__section);
    new module($elem, model);
    this.$container.appendChild($elem);
  }

  bindEvents(): void {
    window.addEventListener('resize', debounce(this.onResize.bind(this), 150));
    this.model.on('menuChange', () => {
      this.gotoSection(this.model.data.selected.idx);
    });
    // window.addEventListener('wheel', throttle(() => {
    //   this.checkSection();
    // }, 200))
  }

  calculateSectionsBorder(): void {
    this.sectionsBorder = [];
    for (let i = 0, max = this.$sections.length; i < max; i++) {
      const top = (this.$sections[i] as HTMLElement).getBoundingClientRect().top + window.scrollY;
      this.sectionsBorder.push(top);
    }
  }

  checkSection(): void {
    const currentTop = window.scrollY;
    // if (currentTop)

    for (let i = 0, max = this.sectionsBorder.length; i < max; i++) {
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
      scrollTo(this.sectionsBorder[idx], true, window);
    }
  }

  onResize(): void {
    this.calculateSectionsBorder();
  }
}