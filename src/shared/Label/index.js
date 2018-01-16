import getCssClass from '../../util/getCssClass';
import { MODIFIER } from '../constants';


import Element from '../../Element';


export default class Label extends Element {

  static get MODIFIER() {
    return MODIFIER;
  }

  constructor(element, parent) {
    super(element, parent, 'label');
  }

  setActive() {
    this.setModifierClass(MODIFIER.ACTIVE);
  }

  removeActive() {
    this.removeModifierClass(MODIFIER.ACTIVE);
  }

  setFilled() {
    this.setModifierClass(MODIFIER.FILLED);
  }

  removeFilled() {
    this.removeModifierClass(MODIFIER.FILLED);
  }

  handleBlur() {
    if (this.parent.getValue()) {
      this.setFilled();
    } else {
      this.removeFilled();
    }
  }
}