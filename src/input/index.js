import { PREFIX } from '../globalConstants';
import getCssClass from '../util/getCssClass';

import './_input.scss';

import Component from '../Component';

import Textfield from './Textfield';
import InputUnderline from './Underline';
import InputLabel from './Label';


export default class Input extends Component {

  NAME = 'input';
  MODIFIER = {
    ACTIVE: 'active',
    FOCUSED: 'focused',
    FILLED: 'filled',
    DISABLED: 'disabled'
  };

  // _disabled = false;

  constructor(root, parent) {
    super(root, parent);
    this.BLOCK = this.PREFIX + '-' + this.NAME;
    this.initializeElements();
  }

  initializeElements() {
    const inputElement = this.root.querySelector('.uni-input__textfield');
    if (inputElement) {
      this.input = new Textfield(inputElement, this);
    }
    const underlineElement = this.root.querySelector('.uni-input__underline');
    if (underlineElement) {
      this.underline = new InputUnderline(underlineElement, this);
    }
    const labelElement = this.root.querySelector('.uni-input__label');
    if (labelElement) {
      this.label = new InputLabel(labelElement, this);
    }

    if (this.getValue()) {
      this.label.setFilled();
    }
  }

  // INTERNAL METHODS

  onInputFocus() {
    this.underline.setActive();
    this.label.setActive();
    this.setModifierClass(this.MODIFIER.FOCUSED);
  }

  blur() {
    this.underline.deactivate();
    this.label.removeActive();
    this.removeModifierClass(this.MODIFIER.FOCUSED);
    if(!this.getValue()) {
      this.label.removeFilled();
      this.removeModifierClass(this.MODIFIER.FILLED);
    }
  }
  

  // PUBLIC API

  setValue(value) {
    this.removeModifierClass(this.MODIFIER.FILLED);
    this.input.setValue(value);
    this.label.setFilled();
  }

  focus() {
    this.onInputFocus();
    this.input.focus();
    this.label.setActive();
    this.setModifierClass(this.MODIFIER.FOCUSED);
  }

  getValue() {
    return this.input.getValue();
  }

  clear() {
    this.setValue('');
    this.label.removeFilled();
    this.label.removeActive();
    this.removeModifierClass(this.MODIFIER.FILLED);
  }

  disable() {
    this.input.disable();
    this.setModifierClass(this.MODIFIER.DISABLED);
  }

  get disabled() {
    return this.input.isDisabled();
  }

  set disabled(bool) {
    if (bool === true) {
      this.input.disable();
    } else if (bool === false) {
      this.input.enable();
    }
  }

  enable() {
    this.input.enable();
    this.removeModifierClass(this.MODIFIER.DISABLED);
  }

  destroy() {
    this.input.destroy();
    delete this.input;
    delete this.underline;
    delete this.label;
  }
}