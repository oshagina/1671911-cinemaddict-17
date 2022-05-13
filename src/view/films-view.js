import {createElement} from '../render.js';

const createFilmsTemplate = () => '<section class="films"></section>';

export default class FilmsView {
//метод чтобы получить шаблон разметки
  getTemplate() {
    return createFilmsTemplate();
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
