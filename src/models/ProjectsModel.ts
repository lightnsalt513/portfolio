export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
}

export class ProjectsModel {
  data: ProjectItem[] = [
    {
      title: 'Project 1',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 2',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 3',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 4',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imgUrl: 'https://via.placeholder.com/150'
    }
  ]
}