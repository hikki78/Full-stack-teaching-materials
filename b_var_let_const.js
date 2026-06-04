// Part 2:VAR, LET, CONST
// there are three ways to declare variables in JavaScript: var, let, and const. Each has its own characteristics and use cases.
// Mostly in real-world applications, developers prefer using let and const over var due to their block-scoping and reduced chances of accidental reassignments. Var is generally avoided in modern JavaScript development because of its function-scoping and potential for bugs related to hoisting.
var a= 1;
console.log(a);

var a = 1;
a = 2;
console.log(a);

let b = 1;
b = 2;
console.log(a);

//why I could not reassign a for let when I already declared it with var? Because of the "hoisting" nature of JavaScript, the variable 'a' declared with 'var' is hoisted to the top of its scope and is initialized with 'undefined'. When you try to declare 'a' again with 'let', it creates a new block-scoped variable that cannot be redeclared in the same scope. This results in a SyntaxError because you cannot have two variables with the same name in the same scope when using 'let'.

//const c = 1;
//c = 2; // This will throw a TypeError because you cannot reassign a value to a constant variable.
//console.log(c); // This line will not be executed due to the error on the previous line. Helps in catching error upfront.
