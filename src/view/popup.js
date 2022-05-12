import {createElement} from '../render.js';

const createPopupTemplate = () => '<section class="film-details"></section>';

export default class PopupView {
//метод чтобы получить шаблон разметки
  getTemplate() {
    return createPopupTemplate();
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
