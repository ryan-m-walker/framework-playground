import getCssClass from '../util/getCssClass';


export default class Element {
  constructor(element, parent, name) {
    this.element = element;
    this.parent = parent;
    this.NAME = name;
    this.BLOCK = this.parent.BLOCK;
  }

  setModifierClass(modifier) {
    this.element.classList.add(getCssClass(
      this.BLOCK,
      this.NAME,
      modifier
    ));
  }

  removeModifierClass(modifier) {
    this.element.classList.remove(getCssClass(
      this.BLOCK,
      this.NAME,
      modifier
    ));
  }
}