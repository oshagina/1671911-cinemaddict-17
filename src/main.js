import ProfileView from './view/profile-view.js';
import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';


const siteMainElement = document.querySelector('.main');
//создаем экземпляр  FilmsPresenter
const filmsPresenter = new FilmsPresenter();

render (new ProfileView(), siteMainElement);
render (new FiltersView(), siteMainElement);
filmsPresenter.init(siteMainElement);
