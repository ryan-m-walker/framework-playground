
import autoInit from './autoInit';
import Button from './button';
import Input from './input';

import './radio/Radio';

// const uni = {
//   autoInit,
//   Button,
//   Input
// };

class Uni {

  NAME = 'uni';

  components = {};

  Input(root, componentName) {
    this.components[root.getAttribute('data-uni-input')] = new Input(root, this);
  }

  initializeAll(root = document) {
    const inputNodes = root.querySelectorAll('[data-uni-input]');
    inputNodes.forEach(inputNode => {
      this.Input(inputNode);
    });
  }
}

window.uni = new Uni();



// window.myInput = new uni.Input(document.querySelector('.uni-input'));

// console.log(myInput);