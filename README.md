<br />
<br />

1. [Overview](#overview)
2. [주요 컴포넌트 구성](#structure)
3. [기술 스택](#techstack)

<br />
<br />

## 1. Overview <a id="overview"></a>
* 컴포넌트 개발 개념을 조금 더 이해하기 위해 스태틱한 개인 포트폴리오 사이트를 JavaScript만으로 컴포넌트화 하여 개발 시도. 별도 TypeScript 스터디한 것을 바탕으로 프로젝트에 함께 적용
* 반응형 UI 및 웹접근성 대응
* 크로스브라우징: 최신 브라우저
> **Live URL** : https://lightnsalt513.github.io/portfolio/
* **주요 작업 부분** :
  * 처음에는 JavaScript로 작업을 시작했으나, TypeScript 스터디를 진행 후 프로젝트 구조 변경하여 진행.
  * 각 섹션(`AboutView`, `ProjectsView`, `ContactView`)들을 구성하는 컨텐츠 영역은 스크롤에 따라 메뉴가 활성화 되고, 메뉴 변경 시 해당 섹션으로 스크롤 이동이 필요한 기능들이 있어 이런 역할을 공통으로 담당하는 `ContentListView` 컴포넌트를 생성. 해당 컴포넌트에서 각 섹션들을 자식 컴포넌트 개념으로 호출하여 DOM 생성.
  * 메뉴에 대한 데이터와 메뉴의 활성화 상태(state)는 `MenuModel`에 구성하고, 메뉴 변경 시 `menuChange`라는 커스텀 이벤트를 트리거하도록 함. 또한 `on` 메써드를 제공하여, 해당 이벤트 발생 시 실행될 콜백함수를 등록할 수 있도록 함. 콘텐츠 영역의 섹션별 스크롤 등을 담당하는 `ContentListView` 컴포넌트는 `menuChange` 이벤트 발생 시 메뉴와 메칭되는 섹션으로 이동할 수 있는 함수를 콜백함수로 전달.
  * `NavbarView` 컴포넌트에서는 `menuChange` 이벤트 발생 시 `MenuModel` 의 `on` 메써드를 통해 현재 선택 된 메뉴가 바뀌는 함수를 콜백함수로 등록하고, 메뉴를 클릭하여 메뉴 변경이 필요한 경우 `MenuModel`에서 제공하는 `changeSelected` 메써드를 통해 선택된 메뉴 상태를 변경.
  * '선택메뉴의 상태'에 대한 제어권은 모두 `MenuModel`에 있으며, 다른 컴포넌트들은 해당 객체를 통해서만 '선택메뉴' 조회, '선택메뉴' 변경, '선택메뉴'의 변경 감지 등을 할 수 있도록 함으로 상태 관리를 한 곳에서 할 수 있음.
  
<br />
<br />

## 2. 주요 컴포넌트 구성 <a id="structure"></a>

| 컴포넌트명 | 설명  |
| - | - |
| models/MenuModel | 메뉴의 스태틱 데이터 제공, 상태 관리를 담당 ('선택메뉴'의 조회, 변경, 변화감지 등을 할 수 있는 메서드 제공) |
| models/ProjectModel | Projects 섹션의 스태틱 데이터 제공 |
| views/NavbarView | 네이베이션 영역 컴포넌트 |
| views/ContentListView <br /> - AboutView <br /> - ProjectsView <br /> - ContactView | 섹션별 컨텐츠들을 노출하고, 메뉴 변경에 따른 스크롤 처리를 담당하는 컴포넌트 |
    
<br />
<br />

## 3. 기술 스택 <a id="techstack"></a>
  * FE :
    * `TypeScript`
    * `SASS`
    * `Webpack` &amp; `Babel`
