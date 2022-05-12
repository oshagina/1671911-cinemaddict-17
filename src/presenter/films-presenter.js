import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import SortView from '../view/sort-view.js';
import FilmCardView from '../view/film-card-view.js';
//import PopupView from '../view/popup.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  //это класс пропертис для повторяющихся компонентов
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();

  // метод начала работы
  //filmsContainer - то , куда будут отрисовываться все  чудеса
  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;
    //нарисуем панель для всего
    render(this.filmsComponent, this.filmsContainer);
    // рисуем сортировку
    render(new SortView(), this.filmsComponent.getElement());
    render(new FilmsListView(), this.filmsListComponent.getElement());
    render(this.filmsListComponent, this.filmsComponent.getElement());
    // рисуем в цикле несколько карточек (пока одинаковых)
    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsComponent.getElement());
    }
    //рисуем длиную кнопку
    render(new ShowMoreButtonView(), this.filmsComponent.getElement());
    //render(new PopupView(), this.filmsContainer);
  };

}
