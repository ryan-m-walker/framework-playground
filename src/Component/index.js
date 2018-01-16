import getCssClass from '../util/getCssClass';


export default class Component {

  constructor(root, parent) {
    this.root = root;
    this.parent = parent;
    this.PREFIX = parent.NAME;
  }

  setModifierClass(modifier) {
    this.root.classList.add(getCssClass(
      this.BLOCK,
      null,
      modifier
    ));
  }

  removeModifierClass(modifier) {
    this.root.classList.remove(getCssClass(
      this.BLOCK,
      null,
      modifier
    ));
  }
}