import { MenuModel } from './models/MenuModel';
import { NavbarView } from './views/NavbarView';
import { ContentListView } from './views/ContentListView';
import appStyle from './styles/global.scss';
import faviconApple from './assets/favicon/apple-touch-icon.png';
import favicon16 from './assets/favicon/favicon-16x16.png';
import favicon32 from './assets/favicon/favicon-32x32.png';

// Create Favicon Links
const favicon = `
  <link rel="apple-touch-icon" sizes="180x180" href=${faviconApple}>
  <link rel="icon" type="image/png" sizes="32x32" href=${favicon16}>
  <link rel="icon" type="image/png" sizes="16x16" href=${favicon32}>
`;

const $headElem = document.getElementsByTagName('head')[0];
const $app = document.getElementById('app');
const $navElem = document.createElement('header');
const $contentsElem = document.createElement('main');

$headElem.insertAdjacentHTML('beforeend', favicon);

$app.classList.add(appStyle.app);
$navElem.classList.add(appStyle.app__nav);
$contentsElem.classList.add(appStyle.app__contents);
$app.append($navElem);
$app.append($contentsElem);

const menuModel = new MenuModel();
new NavbarView($navElem, menuModel);
new ContentListView($contentsElem, menuModel);