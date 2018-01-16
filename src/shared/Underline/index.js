import getCssClass from '../../util/getCssClass';
import { MODIFIER } from '../constants';

import Element from '../../Element';


class Underline extends Element {

  static get MODIFIER() {
    return MODIFIER
  }
  _active = false;

  constructor(element, parent) {
    super(element, parent, 'underline');
  }

  setActive() {
    this._active = true;
    this.setModifierClass(MODIFIER.ACTIVE);
  }

  deactivate() {
    this._active = false;
    this.removeModifierClass(MODIFIER.ACTIVE);
  }
}


export default Underline;
