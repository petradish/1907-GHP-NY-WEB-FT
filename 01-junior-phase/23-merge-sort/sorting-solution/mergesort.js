'use strict';
/* eslint-disable no-use-before-define */

// [ 6, 4]
const mergeSort = function (array) {
  if (array.length < 2) return array; // base case
  const splits = split(array),
        left = splits[0],
        right = splits[1];
  const sortedLeftHalf = mergeSort(left)
  const sortedRightHalf = mergeSort(right)
  return merge(sortedLeftHalf, sortedRightHalf); // merge sorted!
};

const split = function (array) {
  const center = array.length / 2,
        left = array.slice(0, center),
        right = array.slice(center);
  return [left, right];
};

const merge = function (left, right) {
  const merged = [];
  let leftIdx = 0,
      rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
};

// // from old video...
// function merge (left, right) {
//   const merged = [];
//   let leftIdx = 0,
//       rightIdx = 0,
//       leftVal,
//       rightVal;
//   // admittedly pretty convoluted, but we do this in order to avoid shift
//   while (leftIdx < left.length || rightIdx < right.length) {
//     leftVal = left[leftIdx];
//     rightVal = right[rightIdx];
//     if (leftVal < rightVal || rightVal === undefined) {
//       merged.push(leftVal);
//       leftIdx++;
//     } else {
//       merged.push(rightVal);
//       rightIdx++;
//     }
//   }
//   return merged;
// }
