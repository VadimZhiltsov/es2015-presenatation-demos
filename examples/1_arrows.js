console.time('1');
var nums = [1, 2, 4, 5, 6]
var doubled1 = nums.map(function(num){
	return num*2
});
var doubled2 = nums.map( num => num*2 );

console.log(doubled1);
console.log(doubled2);
console.timeEnd('1');