export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  github: string;
  liveUrl: string;
}

export class ProjectsModel {
  data: ProjectItem[] = [
    {
      title: 'Watch Configurator (React version)',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['React', 'TypeScript', 'JavaScript', 'SASS'],
      imgUrl: 'https://via.placeholder.com/150',
      github: 'javascript:void(0)',
      liveUrl: 'javascript:void(0)'
    },
    {
      title: 'Portfolio',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['TypeScript', 'JavaScript', 'SASS'],
      imgUrl: 'https://via.placeholder.com/150',
      github: 'javascript:void(0)',
      liveUrl: 'javascript:void(0)'
    },
    {
      title: 'E-Commerce',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['React', 'Redux', 'Styled-Components', 'Express', 'MySQL'],
      imgUrl: 'https://via.placeholder.com/150',
      github: 'javascript:void(0)',
      liveUrl: 'javascript:void(0)'
    },
    {
      title: 'Twitter Clone',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['React', 'Redux'],
      imgUrl: 'https://via.placeholder.com/150',
      github: 'javascript:void(0)',
      liveUrl: 'javascript:void(0)'
    },
    {
      title: 'Watch Configurator',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['JavaScript', 'jQuery', 'SASS', 'TweenMax'],
      imgUrl: 'https://via.placeholder.com/150',
      github: 'javascript:void(0)',
      liveUrl: 'javascript:void(0)'
    },
    {
      title: 'Canvas R &amp; D Project',
      description: 'Lalalalalal sdjflskdfj asdkfja lksdjfadf',
      tags: ['JavaScript', 'jQuery', 'TweenMax', 'ScrollMagic'],
      imgUrl: 'https://via.placeholder.com/150',
      github: 'javascript:void(0)',
      liveUrl: 'javascript:void(0)'
    },
  ]
}