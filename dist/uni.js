/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (B, E, M) {
  return B + '__' + (E ? E : '') + '--' + (M ? M : '');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoInit = __webpack_require__(2);

var _autoInit2 = _interopRequireDefault(_autoInit);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(4);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const uni = {
//   autoInit,
//   Button,
//   Input
// };

var Uni = function () {
  function Uni() {
    _classCallCheck(this, Uni);

    this.NAME = 'uni';
    this.components = {};
  }

  _createClass(Uni, [{
    key: 'Input',
    value: function Input(root, componentName) {
      this.components[root.getAttribute('data-uni-input')] = new _input2.default(root, this);
    }
  }, {
    key: 'autoInit',
    value: function autoInit() {
      var _this = this;

      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

      var inputNodes = root.querySelectorAll('[data-uni-input]');
      inputNodes.forEach(function (inputNode) {
        _this.Input(inputNode);
      });
    }
  }]);

  return Uni;
}();

window.uni = new Uni();

// window.myInput = new uni.Input(document.querySelector('.uni-input'));

// console.log(myInput);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniAutoInit;

var registery = Object.create(null);

function uniAutoInit() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  var nodes = root.querySelectorAll('[data-uni-el]');
  nodes.forEach(function (node) {});
}

uniAutoInit.register = function (componentName, componentClass) {
  registery[componentName] = componentClass;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function Button(root) {
  _classCallCheck(this, Button);

  this.root = root;
};

exports.default = Button;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globalConstants = __webpack_require__(5);

__webpack_require__(6);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(8);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(9);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {

  // _disabled = false;

  function Input(root, parent) {
    _classCallCheck(this, Input);

    this.NAME = 'input';

    this.root = root;
    this.parent = parent;
    this.PREFIX = parent.NAME;
    this.BLOCK = this.PREFIX + '-' + this.NAME;
    this.initializeElements();
  }

  _createClass(Input, [{
    key: 'initializeElements',
    value: function initializeElements() {
      var inputElement = this.root.querySelector('.uni-input__textfield');
      if (inputElement) {
        this.input = new _index2.default(inputElement, this);
      }
      var underlineElement = this.root.querySelector('.uni-input__underline');
      if (underlineElement) {
        this.underline = new _index4.default(underlineElement, this);
      }
      var labelElement = this.root.querySelector('.uni-input__label');
      if (labelElement) {
        this.label = new _index6.default(labelElement, this);
      }

      if (this.getValue()) {
        this.label.setFilled();
      }

      // if (this.input.isDisabled()) {
      //   this._disabled = true;
      // }
    }

    // INTERNAL METHODS

  }, {
    key: 'onInputFocus',
    value: function onInputFocus() {
      this.underline.setActive();
      this.label.setActive();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.underline.deactivate();
      if (!this.getValue()) {
        this.label.removeActive();
        this.label.removeFilled();
      }
    }

    // PUBLIC API

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.input.setValue(value);
      this.label.setFilled();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.onInputFocus();
      this.input.focus();
      this.label.setActive();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input.getValue();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setValue('');
      this.label.removeFilled();
      this.label.removeActive();
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.input.disable();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.input.enable();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.input.destroy();
      delete this.input;
      delete this.underline;
      delete this.label;
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  PREFIX: 'uni'
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

.getValue(): string
.setValue(string)

*/

var Input = function () {
  function Input(input, parent) {
    _classCallCheck(this, Input);

    this._value = '';
    this._disabled = false;

    this.parent = parent;
    this.input = input;
    this._value = this.input.value;
    this.init();
    this.initEvents();
  }

  _createClass(Input, [{
    key: 'init',
    value: function init() {
      if (this.input.disabled) {
        this._disabled = true;
      }
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      var _this = this;

      this._keyUpListener = this.input.addEventListener('keyup', function (e) {
        return _this.handleChange(e);
      });
      this._focusListener = this.input.addEventListener('focus', this.handleFocus.bind(this));
      this._blurListener = this.input.addEventListener('blur', this.handleBlur.bind(this));
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.input.disabled = true;
      this._disabled = true;
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.input.disabled = false;
      this._disabled = false;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.input.disabled;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this._value = event.target.value;
      this.input.value = this._value;
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.parent.onInputFocus();
      console.log('FOCUS');
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.parent.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this._value = value;
      this.input.value = this._value;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this._value;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this;

      console.log('DESTROY');
      this.input.removeEventListener('keyup', function (e) {
        return _this2.handleChange(e);
      });
      this.input.removeEventListener('focus', this.handleFocus);
      this.input.removeEventListener('blur', this.handleBlur.bind(this));
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getCssClass = __webpack_require__(0);

var _getCssClass2 = _interopRequireDefault(_getCssClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Underline = function () {
  function Underline(underline, parent) {
    _classCallCheck(this, Underline);

    this.ELEMENT = 'underline';
    this.MODIFIER = {
      ACTIVE: 'active',
      FILLED: 'filled'
    };
    this._active = false;

    this.underline = underline;
    this.parent = parent;
    this.BLOCK = this.parent.BLOCK;
  }

  _createClass(Underline, [{
    key: 'setActive',
    value: function setActive() {
      this._active = true;
      this.underline.classList.add((0, _getCssClass2.default)(this.BLOCK, this.ELEMENT, this.MODIFIER.ACTIVE));
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this._active = false;
      this.underline.classList.remove((0, _getCssClass2.default)(this.BLOCK, this.ELEMENT, this.MODIFIER.ACTIVE));
    }
  }]);

  return Underline;
}();

exports.default = Underline;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getCssClass = __webpack_require__(0);

var _getCssClass2 = _interopRequireDefault(_getCssClass);

var _Label2 = __webpack_require__(10);

var _Label3 = _interopRequireDefault(_Label2);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputLabel = function (_Label) {
  _inherits(InputLabel, _Label);

  function InputLabel(label, parent) {
    _classCallCheck(this, InputLabel);

    return _possibleConstructorReturn(this, (InputLabel.__proto__ || Object.getPrototypeOf(InputLabel)).call(this, label, parent));
  }

  return InputLabel;
}(_Label3.default);

exports.default = InputLabel;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getCssClass = __webpack_require__(0);

var _getCssClass2 = _interopRequireDefault(_getCssClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Label = function () {
  function Label(label, parent) {
    _classCallCheck(this, Label);

    this.ELEMENT = 'label';
    this.MODIFIER = {
      ACTIVE: 'active',
      FILLED: 'filled'
    };

    this.label = label;
    this.parent = parent;
    this.BLOCK = this.parent.BLOCK;
  }

  _createClass(Label, [{
    key: 'setActive',
    value: function setActive() {
      this.label.classList.add((0, _getCssClass2.default)(this.BLOCK, this.ELEMENT, this.MODIFIER.ACTIVE));
    }
  }, {
    key: 'removeActive',
    value: function removeActive() {
      this.label.classList.remove((0, _getCssClass2.default)(this.BLOCK, this.ELEMENT, this.MODIFIER.ACTIVE));
    }
  }, {
    key: 'setFilled',
    value: function setFilled() {
      this.label.classList.add((0, _getCssClass2.default)(this.BLOCK, this.ELEMENT, this.MODIFIER.FILLED));
    }
  }, {
    key: 'removeFilled',
    value: function removeFilled() {
      this.label.classList.remove((0, _getCssClass2.default)(this.BLOCK, this.ELEMENT, this.MODIFIER.FILLED));
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      if (this.parent.getValue()) {
        this.setFilled();
      } else {
        this.removeFilled();
      }
    }
  }]);

  return Label;
}();

exports.default = Label;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjY4NDg1MzI1YzU4MDYwMjEyZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2V0Q3NzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hdXRvSW5pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9faW5wdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvVGV4dGZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVW5kZXJsaW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9MYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0xhYmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9MYWJlbC9faW5wdXQtbGFiZWwuc2NzcyJdLCJuYW1lcyI6WyJCIiwiRSIsIk0iLCJVbmkiLCJOQU1FIiwiY29tcG9uZW50cyIsInJvb3QiLCJjb21wb25lbnROYW1lIiwiZ2V0QXR0cmlidXRlIiwiZG9jdW1lbnQiLCJpbnB1dE5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJJbnB1dCIsImlucHV0Tm9kZSIsIndpbmRvdyIsInVuaSIsInVuaUF1dG9Jbml0IiwicmVnaXN0ZXJ5IiwiT2JqZWN0IiwiY3JlYXRlIiwibm9kZXMiLCJyZWdpc3RlciIsImNvbXBvbmVudENsYXNzIiwiQnV0dG9uIiwicGFyZW50IiwiUFJFRklYIiwiQkxPQ0siLCJpbml0aWFsaXplRWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJ1bmRlcmxpbmVFbGVtZW50IiwidW5kZXJsaW5lIiwibGFiZWxFbGVtZW50IiwibGFiZWwiLCJnZXRWYWx1ZSIsInNldEZpbGxlZCIsInNldEFjdGl2ZSIsImRlYWN0aXZhdGUiLCJyZW1vdmVBY3RpdmUiLCJyZW1vdmVGaWxsZWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25JbnB1dEZvY3VzIiwiZm9jdXMiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZGVzdHJveSIsIl92YWx1ZSIsIl9kaXNhYmxlZCIsImluaXQiLCJpbml0RXZlbnRzIiwiZGlzYWJsZWQiLCJfa2V5VXBMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2ZvY3VzTGlzdGVuZXIiLCJoYW5kbGVGb2N1cyIsImJpbmQiLCJfYmx1ckxpc3RlbmVyIiwiaGFuZGxlQmx1ciIsImV2ZW50IiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImJsdXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVW5kZXJsaW5lIiwiRUxFTUVOVCIsIk1PRElGSUVSIiwiQUNUSVZFIiwiRklMTEVEIiwiX2FjdGl2ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIklucHV0TGFiZWwiLCJMYWJlbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztrQkM1RGUsVUFBQ0EsQ0FBRCxFQUFJ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dkIsS0FBS2pELEtBRGtCLEVBRXZCLEtBQUsyQyxPQUZrQixFQUd2QixLQUFLQyxRQUFMLENBQWNDLE1BSFMsQ0FBekI7QUFLRDs7O21DQUVjO0FBQ2IsV0FBS3JDLEtBQUwsQ0FBV3dDLFNBQVgsQ0FBcUJFLE1BQXJCLENBQTRCLDJCQUMxQixLQUFLbEQsS0FEcUIsRUFFMUIsS0FBSzJDLE9BRnFCLEVBRzFCLEtBQUtDLFFBQUwsQ0FBY0MsTUFIWSxDQUE1QjtBQUtEOzs7Z0NBRVc7QUFDVixXQUFLckMsS0FBTCxDQUFXd0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsMkJBQ3ZCLEtBQUtqRCxLQURrQixFQUV2QixLQUFLMkMsT0FGa0IsRUFHdkIsS0FBS0MsUUFBTCxDQUFjRSxNQUhTLENBQXpCO0FBS0Q7OzttQ0FFYztBQUNiLFdBQUt0QyxLQUFMLENBQVd3QyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QiwyQkFDMUIsS0FBS2xELEtBRHFCLEVBRTFCLEtBQUsyQyxPQUZxQixFQUcxQixLQUFLQyxRQUFMLENBQWNFLE1BSFksQ0FBNUI7QUFLRDs7O2lDQUVZO0FBQ1gsVUFBSSxLQUFLaEQsTUFBTCxDQUFZVyxRQUFaLEVBQUosRUFBNEI7QUFDMUIsYUFBS0MsU0FBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtJLFlBQUw7QUFDRDtBQUNGOzs7Ozs7a0JBcERrQnNDLEs7Ozs7OztBQ0hyQix5QyIsImZpbGUiOiJ1bmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2Njg0ODUzMjVjNTgwNjAyMTJmOSIsIlxuZXhwb3J0IGRlZmF1bHQgKEIsIEUsIE0pID0+IHtcbiAgcmV0dXJuIEIgKyAnX18nICsgKEUgPyBFIDogJycpICsgJy0tJyArIChNID8gTSA6ICcnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZXRDc3NDbGFzcy5qcyIsIlxuaW1wb3J0IGF1dG9Jbml0IGZyb20gJy4vYXV0b0luaXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5cblxuXG4vLyBjb25zdCB1bmkgPSB7XG4vLyAgIGF1dG9Jbml0LFxuLy8gICBCdXR0b24sXG4vLyAgIElucHV0XG4vLyB9O1xuXG5jbGFzcyBVbmkge1xuXG4gIE5BTUUgPSAndW5pJztcblxuICBjb21wb25lbnRzID0ge307XG5cbiAgSW5wdXQocm9vdCwgY29tcG9uZW50TmFtZSkge1xuICAgIHRoaXMuY29tcG9uZW50c1tyb290LmdldEF0dHJpYnV0ZSgnZGF0YS11bmktaW5wdXQnKV0gPSBuZXcgSW5wdXQocm9vdCwgdGhpcyk7XG4gIH1cblxuICBhdXRvSW5pdChyb290ID0gZG9jdW1lbnQpIHtcbiAgICBjb25zdCBpbnB1dE5vZGVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11bmktaW5wdXRdJyk7XG4gICAgaW5wdXROb2Rlcy5mb3JFYWNoKGlucHV0Tm9kZSA9PiB7XG4gICAgICB0aGlzLklucHV0KGlucHV0Tm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cblxud2luZG93LnVuaSA9IG5ldyBVbmkoKTtcblxuXG5cbi8vIHdpbmRvdy5teUlucHV0ID0gbmV3IHVuaS5JbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pLWlucHV0JykpO1xuXG4vLyBjb25zb2xlLmxvZyhteUlucHV0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmNvbnN0IHJlZ2lzdGVyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaUF1dG9Jbml0KHJvb3QgPSBkb2N1bWVudCkge1xuICBjb25zdCBub2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdW5pLWVsXScpO1xuICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIFxuICB9KTtcbn1cblxudW5pQXV0b0luaXQucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjb21wb25lbnRDbGFzcykge1xuICByZWdpc3RlcnlbY29tcG9uZW50TmFtZV0gPSBjb21wb25lbnRDbGFzcztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXV0b0luaXQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24ge1xuICBjb25zdHJ1Y3Rvcihyb290KSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24vaW5kZXguanMiLCJpbXBvcnQgeyBQUkVGSVggfSBmcm9tICcuLi9nbG9iYWxDb25zdGFudHMnO1xuXG5pbXBvcnQgJy4vX2lucHV0LnNjc3MnO1xuXG5pbXBvcnQgVGV4dGZpZWxkIGZyb20gJy4vVGV4dGZpZWxkL2luZGV4JztcbmltcG9ydCBJbnB1dFVuZGVybGluZSBmcm9tICcuLi9zaGFyZWQvVW5kZXJsaW5lL2luZGV4JztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4vTGFiZWwvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcblxuICBOQU1FID0gJ2lucHV0JztcblxuICAvLyBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihyb290LCBwYXJlbnQpIHtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuUFJFRklYID0gcGFyZW50Lk5BTUU7XG4gICAgdGhpcy5CTE9DSyA9IHRoaXMuUFJFRklYICsgJy0nICsgdGhpcy5OQU1FO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUVsZW1lbnRzKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWxlbWVudHMoKSB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy51bmktaW5wdXRfX3RleHRmaWVsZCcpO1xuICAgIGlmIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgVGV4dGZpZWxkKGlucHV0RWxlbWVudCwgdGhpcyk7XG4gICAgfVxuICAgIGNvbnN0IHVuZGVybGluZUVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnVuaS1pbnB1dF9fdW5kZXJsaW5lJyk7XG4gICAgaWYgKHVuZGVybGluZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMudW5kZXJsaW5lID0gbmV3IElucHV0VW5kZXJsaW5lKHVuZGVybGluZUVsZW1lbnQsIHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnVuaS1pbnB1dF9fbGFiZWwnKTtcbiAgICBpZiAobGFiZWxFbGVtZW50KSB7XG4gICAgICB0aGlzLmxhYmVsID0gbmV3IElucHV0TGFiZWwobGFiZWxFbGVtZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpKSB7XG4gICAgICB0aGlzLmxhYmVsLnNldEZpbGxlZCgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmlucHV0LmlzRGlzYWJsZWQoKSkge1xuICAgIC8vICAgdGhpcy5fZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIElOVEVSTkFMIE1FVEhPRFNcblxuICBvbklucHV0Rm9jdXMoKSB7XG4gICAgdGhpcy51bmRlcmxpbmUuc2V0QWN0aXZlKCk7XG4gICAgdGhpcy5sYWJlbC5zZXRBY3RpdmUoKTtcbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgdGhpcy51bmRlcmxpbmUuZGVhY3RpdmF0ZSgpO1xuICAgIGlmKCF0aGlzLmdldFZhbHVlKCkpIHtcbiAgICAgIHRoaXMubGFiZWwucmVtb3ZlQWN0aXZlKCk7XG4gICAgICB0aGlzLmxhYmVsLnJlbW92ZUZpbGxlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBVQkxJQyBBUElcblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMubGFiZWwuc2V0RmlsbGVkKCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLm9uSW5wdXRGb2N1cygpO1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB0aGlzLmxhYmVsLnNldEFjdGl2ZSgpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMubGFiZWwucmVtb3ZlRmlsbGVkKCk7XG4gICAgdGhpcy5sYWJlbC5yZW1vdmVBY3RpdmUoKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5pbnB1dC5kaXNhYmxlKCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5pbnB1dC5lbmFibGUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMuaW5wdXQ7XG4gICAgZGVsZXRlIHRoaXMudW5kZXJsaW5lO1xuICAgIGRlbGV0ZSB0aGlzLmxhYmVsO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lucHV0L2luZGV4LmpzIiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSRUZJWDogJ3VuaSdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2xvYmFsQ29uc3RhbnRzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnB1dC9faW5wdXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qXG5cbi5nZXRWYWx1ZSgpOiBzdHJpbmdcbi5zZXRWYWx1ZShzdHJpbmcpXG5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcblxuICBfdmFsdWUgPSAnJztcbiAgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaW5wdXQsIHBhcmVudCkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLl9rZXlVcExpc3RlbmVyID0gdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSkpO1xuICAgIHRoaXMuX2ZvY3VzTGlzdGVuZXIgPSB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9ibHVyTGlzdGVuZXIgPSB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQuZGlzYWJsZWQ7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICB0aGlzLnBhcmVudC5vbklucHV0Rm9jdXMoKTtcbiAgICBjb25zb2xlLmxvZygnRk9DVVMnKVxuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICB0aGlzLnBhcmVudC5ibHVyKCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZygnREVTVFJPWScpO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUpKTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cyk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcykpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lucHV0L1RleHRmaWVsZC9pbmRleC5qcyIsImltcG9ydCBnZXRDc3NDbGFzcyBmcm9tICcuLi8uLi91dGlsL2dldENzc0NsYXNzJztcblxuY2xhc3MgVW5kZXJsaW5lIHtcblxuICBFTEVNRU5UID0gJ3VuZGVybGluZSdcbiAgTU9ESUZJRVIgPSB7XG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBGSUxMRUQ6ICdmaWxsZWQnXG4gIH1cblxuICBfYWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodW5kZXJsaW5lLCBwYXJlbnQpIHtcbiAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLkJMT0NLID0gdGhpcy5wYXJlbnQuQkxPQ0s7XG4gIH1cblxuICBzZXRBY3RpdmUoKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnVuZGVybGluZS5jbGFzc0xpc3QuYWRkKGdldENzc0NsYXNzKFxuICAgICAgdGhpcy5CTE9DSyxcbiAgICAgIHRoaXMuRUxFTUVOVCxcbiAgICAgIHRoaXMuTU9ESUZJRVIuQUNUSVZFXG4gICAgKSk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudW5kZXJsaW5lLmNsYXNzTGlzdC5yZW1vdmUoZ2V0Q3NzQ2xhc3MoXG4gICAgICB0aGlzLkJMT0NLLFxuICAgICAgdGhpcy5FTEVNRU5ULFxuICAgICAgdGhpcy5NT0RJRklFUi5BQ1RJVkVcbiAgICApKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVW5kZXJsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9VbmRlcmxpbmUvaW5kZXguanMiLCJpbXBvcnQgZ2V0Q3NzQ2xhc3MgZnJvbSAnLi4vLi4vdXRpbC9nZXRDc3NDbGFzcyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vc2hhcmVkL0xhYmVsJztcblxuaW1wb3J0ICcuL19pbnB1dC1sYWJlbC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRMYWJlbCBleHRlbmRzIExhYmVsIHtcblxuICBjb25zdHJ1Y3RvcihsYWJlbCwgcGFyZW50KSB7XG4gICAgc3VwZXIobGFiZWwsIHBhcmVudCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQvTGFiZWwvaW5kZXguanMiLCJpbXBvcnQgZ2V0Q3NzQ2xhc3MgZnJvbSAnLi4vLi4vdXRpbC9nZXRDc3NDbGFzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwge1xuXG4gIEVMRU1FTlQgPSAnbGFiZWwnXG4gIE1PRElGSUVSID0ge1xuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgRklMTEVEOiAnZmlsbGVkJ1xuICB9XG5cbiAgY29uc3RydWN0b3IobGFiZWwsIHBhcmVudCkge1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLkJMT0NLID0gdGhpcy5wYXJlbnQuQkxPQ0s7XG4gIH1cblxuICBzZXRBY3RpdmUoKSB7XG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKGdldENzc0NsYXNzKFxuICAgICAgdGhpcy5CTE9DSyxcbiAgICAgIHRoaXMuRUxFTUVOVCxcbiAgICAgIHRoaXMuTU9ESUZJRVIuQUNUSVZFXG4gICAgKSk7XG4gIH1cblxuICByZW1vdmVBY3RpdmUoKSB7XG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QucmVtb3ZlKGdldENzc0NsYXNzKFxuICAgICAgdGhpcy5CTE9DSyxcbiAgICAgIHRoaXMuRUxFTUVOVCxcbiAgICAgIHRoaXMuTU9ESUZJRVIuQUNUSVZFXG4gICAgKSk7XG4gIH1cblxuICBzZXRGaWxsZWQoKSB7XG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKGdldENzc0NsYXNzKFxuICAgICAgdGhpcy5CTE9DSyxcbiAgICAgIHRoaXMuRUxFTUVOVCxcbiAgICAgIHRoaXMuTU9ESUZJRVIuRklMTEVEXG4gICAgKSk7XG4gIH1cblxuICByZW1vdmVGaWxsZWQoKSB7XG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QucmVtb3ZlKGdldENzc0NsYXNzKFxuICAgICAgdGhpcy5CTE9DSyxcbiAgICAgIHRoaXMuRUxFTUVOVCxcbiAgICAgIHRoaXMuTU9ESUZJRVIuRklMTEVEXG4gICAgKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIGlmICh0aGlzLnBhcmVudC5nZXRWYWx1ZSgpKSB7XG4gICAgICB0aGlzLnNldEZpbGxlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUZpbGxlZCgpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvTGFiZWwvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0L0xhYmVsL19pbnB1dC1sYWJlbC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9