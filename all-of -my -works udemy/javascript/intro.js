
console.clear();




var firstNum = 10;
console.log(firstNum);

// camel case(recommended)
var firstNum;
// pascal case
var FIRSTNUM;
// snake case
var first_num

// rules for naming
// name can contain letters, digits, _ and $.
var mySubject1, math$
// name can't start with digit or number
var math; 
// name can start with and _ orr $.
var _subjectmarks
// names are case sensetive
var x, X;
// can contain reserved keywords
var varName;




// javascript numbers

var num1 = 10; 
// integer
var num2 = 10.9;
// decimal
// type of is used to tell the type of data we have inserted in a cosole.
console.log(typeof(num1))
console.log(typeof(num2))
// addition
var num3 = 15;
var sum = num3 + num1;
console.log(sum)

// subtraction
var diff = num3 - num1;
console.log(diff);

// multiplication
var mul = num3 * num1;
console.log(mul)

var div = num2 / num1;
console.log(div);

// infinity
var divbyzero = num2 / 0;
// console infinity
console.log(divbyzero);
console.log(typeof(divbyzero)); 
// NAN value is printed when trying to add number with a letter or word which means none number
var addString = num3 + "A";
console.log(addString);

console.log(typeof(addString));



