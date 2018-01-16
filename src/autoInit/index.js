
const registery = Object.create(null);

export default function uniAutoInit(root = document) {
  const nodes = root.querySelectorAll('[data-uni-el]');
  nodes.forEach(node => {
    
  });
}

uniAutoInit.register = function(componentName, componentClass) {
  registery[componentName] = componentClass;
}