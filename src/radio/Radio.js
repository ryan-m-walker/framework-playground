import getCssClass from '../util/getCssClass';

import Component from '../Component';
import RadioLabel from './RadioGroup';


class UniRadio extends Component {
  constructor(root, parent) {
    super(root, parent);

    this._clickhandler = () => this.select();
    this.NAME = 'radio';
    this.BLOCK = this.PREFIX + '-' + this.NAME;
    this.initialize();
    this.initializeElements();
  }

  initialize() {
    this.root.addEventListener('click', this._clickhandler);
  }

  initializeElements() {
    const labelEl = this.root.querySelector(getCssClass(this.BLOCK, 'label'));
    this.label = new RadioLabel(labelEl, this);
  }

  select() {
    this.label.setActive();
  }
}


export default UniRadio;

Array.from(document.querySelectorAll('.uni-radio')).forEach((radio, i) => {
  window['radio' + 1] = new UniRadio(radio, window);
});