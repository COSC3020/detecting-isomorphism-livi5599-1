const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

let g1 = [];
let g2 = [];
assert.strictEqual(are_isomorphic(g1, g2), true, 'Test 1 Failed: Empty graphs should be isomorphic');

g1 = [
 [0]
];
g2 = [
  [0, 1],
  [1, 0]
];
assert.strictEqual(are_isomorphic(g1, g2), false, 'Test 2 Failed: Different number of vertices');

g1 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
];
g2 = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 0]
];
assert.strictEqual(are_isomorphic(g1, g2), false, 'Test 3 Failed: Different edge count');

g1 = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
g2 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
];
assert.strictEqual(are_isomorphic(g1, g2), false, 'Test 4 Failed: Degree sequences do not match');
