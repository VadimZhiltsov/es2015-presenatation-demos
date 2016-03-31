function handler(){};
var variable = Math.random()

var obj = {
    // __proto__
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ variable ]: 42
};

console.log(obj);