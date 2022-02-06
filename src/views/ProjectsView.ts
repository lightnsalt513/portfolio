import { ProjectsModel, ProjectItem } from '../models/ProjectsModel';
import compStyle from './ProjectsView.scss';

export interface DataItem {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
}

export class ProjectsView {
  $container: HTMLElement;
  
  constructor(public $wrapper: HTMLElement, public model: ProjectsModel) {
    this.setElements();
  }

  setElements(): void {
    this.$container = this.$wrapper.appendChild(document.createElement('div'));
    this.$container.classList.add(compStyle.projects);
    
    const createProjectList = this.model.data.map((item: ProjectItem) => {
      return this.createProjectItem(item);
    }).join('');
    
    this.$container.innerHTML = `
      <h2 class=${compStyle.projects__title}>Recent Works</h2>
      <div class=${compStyle.projects__disclaimer}>
        <p>프로젝트 상세 내용은 각 Github 경로의 README 파일을 참고해 주세요. <br />가장 최근 작업물이 목록의 최상단에 위치합니다.</p>
      </div>
      <ul class=${compStyle.projects__list}>
        ${createProjectList}
      </ul>
    `;
  }

  createProjectItem(data: ProjectItem): string {
    const createTags = data.tags.reduce((sum, tag) => {
      return sum += `<li data-name=${tag}>${tag}</li>`;
    }, '');

    return `
      <li class=${compStyle.projects__item}>
        <div class=${compStyle['projects__item-inner']}>
          <div class=${compStyle.projects__thumb}>
            <img src=${data.imgUrl} />
          </div>
          <div class=${compStyle.projects__content}>
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <ul>
              ${createTags}
            </ul>
            <div class=${compStyle['projects__content-cta']}>
              <a href=${data.github} target="_blank" title="새창열기: 깃허브 소스코드"><box-icon type='logo' name='github'></box-icon>Github</a>
              ${(data.title !== 'Portfolio Site') && function() {
                return `<a href=${data.liveUrl} target="_blank" title="새창열기: 라이브/데모 페이지"><box-icon name='window-open'></box-icon>Live</a>`
              }()}
            </div>
          </div>
        </div>
      </li>
    `;
  }
}