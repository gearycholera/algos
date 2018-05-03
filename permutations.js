const assert = require('assert');

var getAllPermutations = function(item, allowDuplicates) {
  if (allowDuplicates === undefined) allowDuplicates = false;
  var type = typeof item;
  var permutations = [];
  var nextCombo = [];
  var chars = [];

  if (type === 'string') chars = item.split('');
  else if (type === 'number') chars = ('' + item).split('');
  else if (Array.isArray(item)) chars = item.slice();
  else throw new Error('input not a valid type, must be a number, string, or an array');

  var permutate = function(chars) {
    if (chars.length === 0) {
      var perm;
      if (type === 'number') perm = Number(nextCombo.join(''));
      else if (type === 'string') perm = nextCombo.join('');
      else perm = nextCombo.join('');
      permutations.push(perm);
    }
    for (var i = 0 ; i < chars.length ; i++) {
      chars.push(chars.shift());
      nextCombo.push(chars[0]);
      permutate(chars.slice(1));
      nextCombo.pop();
    }
  }

  permutate(chars);
  if (!allowDuplicates) permutations = Array.from(new Set(permutations));
  return (type === 'object') ? permutations.map((arr) => arr.split('')) : permutations;
}

assert.deepEqual(getAllPermutations('abc').sort(), ['abc', 'acb', 'bca', 'bac', 'cab', 'cba'].sort());