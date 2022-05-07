import {createElement} from '../render.js';

const createSortTemplate = () => (
  `
  <ul class="sort">
  <li><a href="#" class="sort__button">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
</ul>
`
);

export default class SortView {
//метод чтобы получить шаблон разметки
  getTemplate() {
    return createSortTemplate();
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
