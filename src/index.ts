import { MenuModel } from './models/MenuModel';
import { NavbarView } from './views/NavbarView';
import { ContentListView } from './views/ContentListView';
import appStyle from './styles/global.scss';

const $app = document.getElementById('app');
const $navElem = document.createElement('header');
const $contentsElem = document.createElement('main');

$app.classList.add(appStyle.app);
$navElem.classList.add(appStyle.app__nav);
$contentsElem.classList.add(appStyle.app__contents);
$app.append($navElem);
$app.append($contentsElem);

const menuModel = new MenuModel();
new NavbarView($navElem, menuModel);
new ContentListView($contentsElem, menuModel);