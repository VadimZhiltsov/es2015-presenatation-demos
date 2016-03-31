function getASTNode(){
	return {
		op: 1,
		lhs: {
			op: 2
		},
		rhs: 3
	};
}

var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

console.log(a, b, c);


var {op, lhs, rhs} = getASTNode();