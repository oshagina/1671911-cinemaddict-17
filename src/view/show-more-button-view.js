import {createElement} from '../render.js';

const createShowMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreButtonView {
//метод чтобы получить шаблон разметки
  getTemplate() {
    return createShowMoreButtonTemplate();
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
