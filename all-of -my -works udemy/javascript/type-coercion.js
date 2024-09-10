

// implicit coericion to convert any type to any type. 
console.log();

var mstr = "Hello"
var mNum = 5
var mSum = mStr + mNum

console.log(mSum);

console.log(tyeof(mSum));

// output -  "Hello5" - string


// console.log(('hola' + 50));
var mValue = +'2' / -'2'
// this will convert the number inside a string to an actual number.
console.log(mValue);
// result = 2 or -2 not "2" or "-2"


var mValue = 2 >='2' 
// javascript will convert 2 in string to number and starts comparing. 

// in if else statment boolean value for null, undefined, 0 and "",'', value is false while others are true.
// ex.
if (null){
    console.log(true);
}else{
    console.log(false);
}
// results false ;

if (70){
    console.log(true);
}else{
    console.log(false);
}




//  Explicit type coercion

//  to string

console.log(typeof(String(78)));
console.log(typeof(String(true)));
console.log(typeof(String(null)));
console.log(typeof(String(undefined)));
console.log(typeof(String(-90.90)));


// to boolean
console.log(typeof(Boolean('yu'))); reusalt= true
console.log(typeof(Boolean(90))); reusalt= true
console.log(typeof(Boolean(null))); reusalt= false
console.log(typeof(Boolean(undefined))); reusalt= false
console.log(typeof(Boolean(''))); reusalt= false


// to number

console.log((Number('hs')),typeof(Number('hs'))); reusalt= NaN, Number.

console.log((Number('')),typeof(Number(''))); reusalt= NaN, Number;
console.log((Number(false)),typeof(Number(false))); reusalt= NaN, Number;

















