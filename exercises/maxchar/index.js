// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var storage = {};
  for (var i = 0; i < str.length; i++) {
    storage[str[i]] = stroage[str[i]] ++ || 1;
  }
}



// function maxChar(str) {
//   var storage = {};

//   var max = [str[0], 1]

//   for (var i = 0; i < str.length; i++) {
//     if (storage[str[i]] === undefined) {
//       storage[str[i]] = 1;
//     } else {
//       storage[str[i]]++;
//     }
//     if (storage[str[i]] > max[1]) {
//       max[0] = str[i];
//       max[1] = storage[str[i]];
//     }
//   }
//   return max[0];
// }

module.exports = maxChar;
