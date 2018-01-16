
const getCssClass = (B, E, M) => {
  return B + (E ? '__' + E : '') + (M ? '--' + M : '');
};


export default getCssClass;