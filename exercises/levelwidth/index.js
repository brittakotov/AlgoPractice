// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  var currentNode = root;
  var widths = [];
  var queue = [];
  queue.push(currentNode, 's');

  while (queue.length > 1) {
    currentNode = queue.shift();

  return list;
}

module.exports = levelWidth;
