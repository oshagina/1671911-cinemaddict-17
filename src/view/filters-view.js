import {createElement} from '../render.js';

const createFiltersTemplate = () => (
  `<nav class="main-navigation">
<a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
<a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
<a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
<a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
</nav>'
`
);

export default class FiltersView {
//метод чтобы получить шаблон разметки
  getTemplate() {
    return createFiltersTemplate();
  }

  //метод, который позволяет на основе шаблона создать ДОМ-элемент
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  //метод, который позволдяет удалить этот элемент
  removeElement() {
    this.element = null;
  }
}
