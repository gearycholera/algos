function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
  }
}

function assertArraysEqual(actual, expected, testName) {
  var areEqualValues = actual.every(function(item, i) {
    return item === expected[i];
  });
  var areEqualLength = (actual.length === expected.length);

  if (areEqualLength && areEqualValues) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

module.exports = {
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual
}