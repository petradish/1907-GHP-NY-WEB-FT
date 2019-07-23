'use strict';
/* global mergeSort split merge */

describe('Merge sort', function () {

  describe('split', function () {

    it('given one array, returns two arrays', function () {
      expect(split([])).toEqual([[], []]);
    });

    it('splits array of even length', function () {
      expect(split([5, 10])).toEqual([[5], [10]]);
    });

    it('splits array of odd length', function () {
      expect(split([4, 10, 20])).toEqual([[4], [10, 20]]);
    });

  });

  describe('merge', function () {

    it('given two arrays, returns an array', function () {
      expect(merge([], [])).toEqual([]);
    });

    it('given two already sorted arrays of equal length, returns sorted result array', function () {
      expect(merge([1, 5, 10], [2, 4, 11])).toEqual([1, 2, 4, 5, 10, 11]);
      expect(merge([1, 9, 10], [2, 3, 8])).toEqual([1, 2, 3, 8, 9, 10]);
    });

    it('works for arrays of unequal length', function () {
      expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).toEqual([1, 2, 4, 5, 10, 20, 21, 100]);
    });

  });

  describe('mergeSort', function () {

    it('with 1 or fewer elements, returns sorted array', function () {
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([1000])).toEqual([1000]);
    });

    it('does the thing its supposed to do', function () {
      const sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
      expect(sorted).toEqual([-90, 1, 9, 18, 56, 1234, 1994]);
    });

  });

});
