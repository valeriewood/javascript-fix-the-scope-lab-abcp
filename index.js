var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {

  return ('cat\n');
}

function add2(n) {
  return n + two;

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction

 1) Fix the Scope yourAnimal() returns your animal:

      Error: Expected 'cat\n' to equal 'cat'
      + expected - actual

      -cat
      +cat

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:12:35)

  2) Fix the Scope add2(n) adds two to n:

      Error: Expected NaN to equal 875
      + expected - actual

      -NaN
      +875

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:23:30)

  3) Fix the Scope theFunk is "FUNKY!":
     Error: Expected [Function: funkyFunction] to equal 'FUNKY!'
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:35:30)

