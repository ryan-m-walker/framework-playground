const testButton = document.getElementById('test-button');
const getValueButton = document.getElementById('get-value');
const logElButton = document.getElementById('log-el');
const setValueButton = document.getElementById('set-value');
const clearValue = document.getElementById('clear-value');
const disableButton = document.getElementById('disable-button');
const enableButton = document.getElementById('enable-button');

// const myInput = uni.Input(document.querySelector('.uni-input'));

uni.initializeAll();

const myInput = uni.components.myInput;

testButton.addEventListener('click', () => {
  myInput.input.destroy();
});

getValueButton.addEventListener('click', () => {
  console.log(myInput.getValue());
});

logElButton.addEventListener('click', () => {
  console.log(myInput);
});

setValueButton.addEventListener('click', () => {
  myInput.setValue('This is a value');
});

clearValue.addEventListener('click', () => {
  myInput.clear();
});

disableButton.addEventListener('click', () => {
  myInput.disable();
});

enableButton.addEventListener('click', () => {
  myInput.enable();
});

// window.myInput = myInput;