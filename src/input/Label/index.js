import getCssClass from '../../util/getCssClass';
import Label from '../../shared/Label';

import './_input-label.scss';

export default class InputLabel extends Label {
  constructor(label, parent) {
    super(label, parent);
  }
}