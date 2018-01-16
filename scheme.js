
const uni = {
  title: 'uni',
  version: 'v1.0.0',

  components: {
    myButton: uni.Button
  },

  create: {
    button: 'button creator',
    input: 'input creator'
  },

  Button: 'object creator',
  Select: 'object creator',
  Input: 'object creator'
};


uni.create.button(document.getElementById('newButton'));

uni.components.myButton.click();