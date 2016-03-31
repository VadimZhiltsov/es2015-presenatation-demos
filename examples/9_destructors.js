// Fail-soft destructuring
var [a] = [];
console.log(a === undefined);

// Fail-soft destructuring with defaults
var [a = 1] = [];
console.log(a === 1);

// Destructuring + defaults arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
console.log(r({x:1, y:2}) === 23);