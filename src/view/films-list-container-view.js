import {createElement} from '../render.js';

const createFilmsContainerTemplate = () => '<div class="films-list-container"></div>';

export default class FilmsListContainerView {
//метод чтобы получить шаблон разметки
  getTemplate() {
    return createFilmsContainerTemplate();
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
