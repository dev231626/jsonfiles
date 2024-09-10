


// Hoisting 
// is a mechanism where variables and functions can be used before decalring them is called Hoisting in javaScript.
// first defining variable 
num1 = 10;
// then printing
console.log(num1);
// lastly decalaring
var num1;

str1 = "Demo String"

console.log(str1);
var str1;
// behind the scenes
// javascript first moves the variable declared with no value to top of declared value and gives it a value of undefined. if you try to log the variable before declaration it gives a value of undifined.

//and after that is looks if the variable have been given a value. if yes  
// continues execution.






