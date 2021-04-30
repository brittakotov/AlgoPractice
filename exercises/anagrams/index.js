// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  var objA = {};
  var objB = {};

  for (var i = 0; i < stringA.length; i++) {
    if (objA[stringA[i]]) {
      objA[stringA[i]]++;
    } else {
      objA[stringA[i]] = 1;
    }
  }

  for (var i = 0; i < stringB.length; i++) {
    if (objB[stringB[i]]) {
      objB[stringB[i]]++;
    } else {
      objB[stringB[i]] = 1;
    }
  }
  console.log(objA)
  console.log(objB)
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (var key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
