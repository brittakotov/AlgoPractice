// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//create empty array to hold chunks
//for each element, retrieve last chunked element
  //if does not exist, or if length equals chunk size
    //push a new chunk into chunked
  //else, add current element into chunk
  function chunk(array, size) {
    var chunked = [];
    for (var i = 0; i < array.length; i++) {
      var lastChunk = chunked[chunked.length - 1];
      if (!lastChunk || lastChunk.length === size) {
        chunked.push([array[i]]);
      } else {
        lastChunk.push(array[i]);
      }
    }
    return chunked;
  }


  module.exports = chunk;
