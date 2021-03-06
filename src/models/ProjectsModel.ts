import thumb1 from '../assets/thumbnails/thumb_configurator.jpg';
import thumb2 from '../assets/thumbnails/thumb_portfolio.jpg';
import thumb3 from '../assets/thumbnails/thumb_shop.jpg';
import thumb4 from '../assets/thumbnails/thumb_twitter.jpg';
import thumb5 from '../assets/thumbnails/thumb_canvas.jpg';
import thumb6 from '../assets/thumbnails/thumb_configurator.jpg';

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
      description:
        '기존 진행했던 jQuery 기반의 반응형 프로젝트를 React와 TypeScript를 활용하여 부분 재구현',
      tags: ['React', 'Redux', 'TypeScript', 'SASS'],
      imgUrl: thumb1,
      github: 'https://github.com/lightnsalt513/configurator-react',
      liveUrl: 'https://lightnsalt513.github.io/configurator-react',
    },
    {
      title: 'Portfolio Site',
      description:
        'JavaScript(TypeScript)만을 활용하여 스태틱한 반응형 포트폴리오 사이트를 컴포넌트 방식으로 개발',
      tags: ['TypeScript', 'SASS'],
      imgUrl: thumb2,
      github: 'https://github.com/lightnsalt513/portfolio',
      liveUrl: 'https://lightnsalt513.github.io/portfolio',
    },
    {
      title: 'E-Commerce',
      description:
        'MERN 스택으로 간단한 이커머스 반응형 사이트 기능을 구현해 보며 DB부터 서버, 프론트까지의 주요 개발 흐름 학습',
      tags: ['React', 'Redux', 'Styled-Components', 'Express', 'MongoDB'],
      imgUrl: thumb3,
      github: 'https://github.com/lightnsalt513/shop-mern',
      liveUrl: 'https://lightnsalt513.github.io/shop-mern/#/',
    },
    {
      title: 'Twitter Clone',
      description: '간단한 Twitter 클론코딩을 통한 React 학습',
      tags: ['React', 'SASS'],
      imgUrl: thumb4,
      github: 'https://github.com/lightnsalt513/twitter-clone-react',
      liveUrl: 'https://lightnsalt513.github.io/twitter-clone-react',
    },
    {
      title: 'Canvas R&amp;D',
      description:
        '스크롤 기반 텍스트 애니메이션을 Canvas API를 활용해 구현한 R&amp;D 프로젝트 (반응형)',
      tags: ['JavaScript', 'jQuery', 'TweenMax', 'ScrollMagic'],
      imgUrl: thumb5,
      github: 'https://github.com/lightnsalt513/canvas-rnd',
      liveUrl: 'https://lightnsalt513.github.io/canvas-rnd/',
    },
    {
      title: 'Watch Configurator',
      description:
        '갤럭시 워치와 여러 밴드를 결합해보며 상품을 고를 수 있는, 애니메이션 효과 중심의 프로모셔널 반응형 컴포넌트 개발 <br /> (보안 등의 이슈로 Github에 소스코드는 포함되어 있지 않습니다. 작업내용은 README를 참고해 주세요.)',
      tags: ['JavaScript', 'jQuery', 'SASS', 'TweenMax'],
      imgUrl: thumb6,
      github: 'https://github.com/lightnsalt513/configurator-jquery',
      liveUrl: 'https://www.samsung.com/fr/watches/mix-and-match/',
    },
  ];
}
