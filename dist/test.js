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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var testButton = document.getElementById('test-button');
var getValueButton = document.getElementById('get-value');
var logElButton = document.getElementById('log-el');
var setValueButton = document.getElementById('set-value');
var clearValue = document.getElementById('clear-value');
var disableButton = document.getElementById('disable-button');
var enableButton = document.getElementById('enable-button');

// const myInput = uni.Input(document.querySelector('.uni-input'));

uni.autoInit();

var myInput = uni.components.myInput;

testButton.addEventListener('click', function () {
  myInput.input.destroy();
});

getValueButton.addEventListener('click', function () {
  console.log(myInput.getValue());
});

logElButton.addEventListener('click', function () {
  console.log(myInput);
});

setValueButton.addEventListener('click', function () {
  myInput.setValue('This is a value');
});

clearValue.addEventListener('click', function () {
  myInput.clear();
});

disableButton.addEventListener('click', function () {
  myInput.disable();
});

enableButton.addEventListener('click', function () {
  myInput.enable();
});

// window.myInput = myInput;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjY4NDg1MzI1YzU4MDYwMjEyZjkiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbInRlc3RCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0VmFsdWVCdXR0b24iLCJsb2dFbEJ1dHRvbiIsInNldFZhbHVlQnV0dG9uIiwiY2xlYXJWYWx1ZSIsImRpc2FibGVCdXR0b24iLCJlbmFibGVCdXR0b24iLCJ1bmkiLCJhdXRvSW5pdCIsIm15SW5wdXQiLCJjb21wb25lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0IiwiZGVzdHJveSIsImNvbnNvbGUiLCJsb2ciLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiY2xlYXIiLCJkaXNhYmxlIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBLElBQU1BLGFBQWFDLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQSxJQUFNQyxpQkFBaUJGLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBdkI7QUFDQSxJQUFNRSxjQUFjSCxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQXBCO0FBQ0EsSUFBTUcsaUJBQWlCSixTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQXZCO0FBQ0EsSUFBTUksYUFBYUwsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBLElBQU1LLGdCQUFnQk4sU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7QUFDQSxJQUFNTSxlQUFlUCxTQUFTQyxjQUFULENBQXdCLGVBQXhCLENBQXJCOztBQUVBOztBQUVBTyxJQUFJQyxRQUFKOztBQUVBLElBQU1DLFVBQVVGLElBQUlHLFVBQUosQ0FBZUQsT0FBL0I7O0FBRUFYLFdBQVdhLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDekNGLFVBQVFHLEtBQVIsQ0FBY0MsT0FBZDtBQUNELENBRkQ7O0FBSUFaLGVBQWVVLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07QUFDN0NHLFVBQVFDLEdBQVIsQ0FBWU4sUUFBUU8sUUFBUixFQUFaO0FBQ0QsQ0FGRDs7QUFJQWQsWUFBWVMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUMxQ0csVUFBUUMsR0FBUixDQUFZTixPQUFaO0FBQ0QsQ0FGRDs7QUFJQU4sZUFBZVEsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUM3Q0YsVUFBUVEsUUFBUixDQUFpQixpQkFBakI7QUFDRCxDQUZEOztBQUlBYixXQUFXTyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDRixVQUFRUyxLQUFSO0FBQ0QsQ0FGRDs7QUFJQWIsY0FBY00sZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q0YsVUFBUVUsT0FBUjtBQUNELENBRkQ7O0FBSUFiLGFBQWFLLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NGLFVBQVFXLE1BQVI7QUFDRCxDQUZEOztBQUlBLDRCIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjY4NDg1MzI1YzU4MDYwMjEyZjkiLCJjb25zdCB0ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QtYnV0dG9uJyk7XG5jb25zdCBnZXRWYWx1ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtdmFsdWUnKTtcbmNvbnN0IGxvZ0VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1lbCcpO1xuY29uc3Qgc2V0VmFsdWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0LXZhbHVlJyk7XG5jb25zdCBjbGVhclZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLXZhbHVlJyk7XG5jb25zdCBkaXNhYmxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2FibGUtYnV0dG9uJyk7XG5jb25zdCBlbmFibGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLWJ1dHRvbicpO1xuXG4vLyBjb25zdCBteUlucHV0ID0gdW5pLklucHV0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bmktaW5wdXQnKSk7XG5cbnVuaS5hdXRvSW5pdCgpO1xuXG5jb25zdCBteUlucHV0ID0gdW5pLmNvbXBvbmVudHMubXlJbnB1dDtcblxudGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbXlJbnB1dC5pbnB1dC5kZXN0cm95KCk7XG59KTtcblxuZ2V0VmFsdWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKG15SW5wdXQuZ2V0VmFsdWUoKSk7XG59KTtcblxubG9nRWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKG15SW5wdXQpO1xufSk7XG5cbnNldFZhbHVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBteUlucHV0LnNldFZhbHVlKCdUaGlzIGlzIGEgdmFsdWUnKTtcbn0pO1xuXG5jbGVhclZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBteUlucHV0LmNsZWFyKCk7XG59KTtcblxuZGlzYWJsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbXlJbnB1dC5kaXNhYmxlKCk7XG59KTtcblxuZW5hYmxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBteUlucHV0LmVuYWJsZSgpO1xufSk7XG5cbi8vIHdpbmRvdy5teUlucHV0ID0gbXlJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9