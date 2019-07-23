# Sorting Algorithm Benchmarking Demo

A small visualization of sorting algorithms.

## Installation

```sh
npm install # or yarn install
npm start # opens browser/index.html in your default browser
```

## Setup

**We are not including the actual implementations** for bubble & merge sort in this helper. If you run the benchmarking tool as it is, all three algorithms are actually just the native sort (labels notwithstanding).

Open `browser > js > sorts.js` and replace `bubbleSort` and `mergeSort` with your own implementations. Then refresh the benchmarking page.

## Calibration

The visualizer generates random arrays of large size based on powers of 2. For example, with low and high exponents of 7 and 14, the arrays will range from size 128 through 16,384. That may be a lot for your machine to handle! You can modify these constants in `browser/js/bench.js`.

## Algorithms

Algorithm | Average Time Complexity | Worst Time Complexity | Worst Space Complexity | Notes
--- | --- | --- | --- | ---
Native (Quicksort) | O(n·log(n)) | O(n^2) | O(log(n)) | In practice / on average, is very quick
Merge Sort | O(n·log(n)) | O(n·log(n)) | O(n) | Worst case is better than Quicksort
Bubble | O(n^2) | O(n^2) | O(1) | Simple, but terrible time complexity
