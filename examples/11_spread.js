function f(x, y, z) {
	console.log(`x ${x}, y ${y}, z ${z}`)
  return x + y + z;
}
// Pass each elem of array as argument
console.log(f(...[1,2,3]) == 6)