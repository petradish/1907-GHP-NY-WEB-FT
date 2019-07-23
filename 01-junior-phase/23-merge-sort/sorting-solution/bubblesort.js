'use strict';

const bubbleSort = function (array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--) { // passes
    sorted = true; // assume until proven incorrect
    for (let j = 0; j < end; j++) { // bubbling
      if (!inOrder(array, j)) {
        swap(array, j);
        sorted = false;
      }
    }
  }
  return array;
};

/* Since we want to spy on our 'inOrder' and 'swap'
functions in our test specs, we want them to be added
as properties of the 'window' object. This doesn't
happen with const, let, or class declarations, but
*does* happen with function declarations. So we'll
just do that here. (see No. 6 of this article:
http://www.2ality.com/2015/02/es6-scoping.html) */

function inOrder (array, index) { // pure function
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

function swap (array, index) { // side effects
  const oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}

// In-place algorithms use only a small, constant amount of extra space.
// Bubble sort is an in-place algorithm;
// it has good space complexity at O(1), but bad time complexity O(n^2).
