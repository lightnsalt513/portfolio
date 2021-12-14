import { ProjectsModel, ProjectItem } from '../models/ProjectsModel';
import compStyle from './ProjectsView.scss';

const dummyData: ProjectItem = {
  title: 'Lalalala',
  description: 'Lorem ipsem dlsjfslkjds djfsldf',
  tags: ['HTML', 'CSS', 'JS'],
  imgUrl: 'https://via.placeholder.com/150'
}

export class ProjectsView {
  $container: HTMLElement;
  
  constructor(public $wrapper: HTMLElement) {
    this.setElements();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.projects);

    const createProjectList = this.createProjectItem(dummyData);
    
    this.$container.innerHTML = `
      <div class=${compStyle.projects__inner}>
        <h2 class=${compStyle.projects__title}>Recent Works</h2>
        <ul class=${compStyle.projects__list}>
          ${createProjectList}
        </ul>
      </div>
    `;
  }

  createProjectItem(data: ProjectItem): string {
    const createTags = data.tags.reduce((sum, tag) => {
      return sum += `<li>${tag}</li>`;
    }, '');

    return `
      <div class=${compStyle.projects__item}>
        <div class=${compStyle.projects__thumb}>
        </div>
        <div class=${compStyle.projects__content}>
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <ul>
            ${createTags}
          </ul>
        </div>
      </div>
    `;
  }
}