'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    let flag = false;

    do {
      flag = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const helper = this[i];

          this[i] = this[i - 1];
          this[i - 1] = helper;
          flag = true;
        }
      }
    } while (flag);

    return this;
  };
}

module.exports = applyCustomSort;
