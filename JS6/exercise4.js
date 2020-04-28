//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a,b) => a+b; 

//Closure: What does the last line return?
A:13
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//Currying: What does the last line return?
A:31
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)


//Currying: What does the last line return?
A:17
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Composing: What does the last line return?
A:16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//What are the two elements of a pure function?
//A: deterministic - always return the same results given the same input
// no side effect - depending only on its input element and not on any external data or state