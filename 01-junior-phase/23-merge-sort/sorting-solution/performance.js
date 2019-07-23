// This was a simple performance test before we added the full benchmarking utility.
// It's included here to show how you can do a rough performance check without coding
// a fancy visualization.

// for (var i = 9; i <= 12; i++) {
//   const numItems = Math.pow(2, i);
//   const nativeTestArray = [];

//   for(let j = 0; j < numItems; j++) {
//     let rand = Math.floor(Math.random() * numItems);
//     nativeTestArray.push(rand);
//   }

//   const bTestArray = nativeTestArray.slice(0);
//   const mTestArray = nativeTestArray.slice(0);

//   console.time(numItems + ' native');
//   nativeTestArray.sort(function(a, b){ return a - b; });
//   console.timeEnd(numItems + ' native');

//   console.time(numItems + ' bubble');
//   bubbleSort(bTestArray);
//   console.timeEnd(numItems + ' bubble');

//   console.time(numItems + ' merge');
//   mergeSort(mTestArray);
//   console.timeEnd(numItems + ' merge');
// }
