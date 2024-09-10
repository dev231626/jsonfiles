
// syntax to change a given  to different types of forms
// to string()
var num1 = 10;

console.log(num1.toString())



// parseInt() takes a string and returns a number
var strNum = "10";

var strNum1 = "30";

console.log(parseInt(strNum))

// parsefloat takes string, numeral returns float.
var float_num = "44.9";
console.log(parseFloat(float_num))

// to fixed
var flot = 56.887544;
console.log(flot.toFixed())
console.log(flot.toFixed(4))

// what if my string contains a double qoute inside it 
var doubleQoutesString = "this is a \" javascript\" "
// we use \\ (skip-sequence) sign before and before the srtings as above same applies for single qoute also ''.


// another way is 
var doubleQoutesString = "javascript is used in 'artificial intelligence'"
// also
var singleQuotesString = 'javascript makes out webpage "interactive"'









// length of a string

var myFirstString = "this is a string for javascript string function, neabman, nbo"

console.log(myFirstString.length)



// find index of a string inside another string.

console.log(myFirstString.indexOf('javascript'))

console.log(myFirstString.lastIndexOf('javascript'))

// get part of our string .slice (start,end)

console.log(myFirstString.slice(0, 2))

// this slice will write the sentence slicing or starting from number 5
console.log(myFirstString.slice(5))

// get sub string function - substr(startposition, lenght)
console.log(myFirstString.substring(0, 4))

console.log(myFirstString
    .substring(21, 10))
console.log(myFirstString.substring(21))

