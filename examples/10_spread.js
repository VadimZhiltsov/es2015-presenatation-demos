function f(x, ...y) {
  // y is an Array
  console.log(y);
  return x * y.length;
}
console.log(f(3, "hello", true) == 6)
