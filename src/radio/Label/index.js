const MODIFIERS = {
  ACTIVE: 'active',
  DISABLED: 'disabled'
};


import Element from '../../Element';


class RadioLabel extends Element {

  static get MODIFIERS() {
    return MODIFIERS;
  }

  constructor(element, parent) {
    super(element, parent, 'label');
  }

  setActive() {
    this.setModifierClass(this.MODIFIERS.ACTIVE);
  }
}