// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var rev = '';
  var absoluteN = Math.abs(n).toString();

  for (var i = absoluteN.length - 1; i >= 0; i--) {
    rev += absoluteN[i];
  }

  while (rev[0] === 0) {
    rev = rev.slice(1);
  }

  rev = Number(rev) * Math.sign(n);
  
  return rev;
}

module.exports = reverseInt;
