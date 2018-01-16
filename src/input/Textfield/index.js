
/*

.getValue(): string
.setValue(string)

*/

export default class Input {

  _value = '';
  _disabled = false;

  constructor(input, parent) {
    this.parent = parent;
    this.input = input;
    this._value = this.input.value;
    this.init();
    this.initEvents();
  }

  init() {
    if (this.input.disabled) {
      this._disabled = true;
    }
  }

  initEvents() {
    this._keyUpListener = this.input.addEventListener('keyup', e => this.handleChange(e));
    this._focusListener = this.input.addEventListener('focus', this.handleFocus.bind(this));
    this._blurListener = this.input.addEventListener('blur', this.handleBlur.bind(this));
  }

  disable() {
    this.input.disabled = true;
    this._disabled = true;
  }

  enable() {
    this.input.disabled = false;
    this._disabled = false;
  }

  isDisabled() {
    return this.input.disabled;
  }

  handleChange(event) {
    this._value = event.target.value;
    this.input.value = this._value;
  }

  handleFocus() {
    this.parent.onInputFocus();
    console.log('FOCUS')
  }

  handleBlur() {
    this.parent.blur();
  }

  focus() {
    this.input.focus();
  }

  setValue(value) {
    this._value = value;
    this.input.value = this._value;
  }

  getValue() {
    return this._value;
  }

  destroy() {
    console.log('DESTROY');
    this.input.removeEventListener('keyup', e => this.handleChange(e));
    this.input.removeEventListener('focus', this.handleFocus);
    this.input.removeEventListener('blur', this.handleBlur.bind(this));
  }
}