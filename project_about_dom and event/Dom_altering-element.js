// altering element means - modifying or manipulating the html document which is the mainpurpose of Dom.


// create an element - first you should create an element or attribute to insert it to html  

var liElem = document.createElement("li")

// get the element you want to modify
var parent  = document.getElementById("listOfFruits");
// and add the element created by usind appendchild method or prepend
parent.appendChild(liElem); // inserts at the last

console.log(parent); // shows that a new <li> is added as the last child of the parent node (the <ul>)

// prepend - inserts before first element 
var myNew = document.createElement("li") 

var parent = document.getElementById("listoffruits")

parent.prepend(myNew)

console.log(parent)

// inner html - is used to call and modify the html content of the html element 

var get = document.getElementById("bigId")

console.log(get.innerHTML); // prints all the html contents inside "bigId" id

get.innerHTML = "<li> kiwi </li>" // changes inner html of div (with "bigId" id) to "<li> kiwi </li>".  
console.log(content.innerHTML); // now prints "<li> kiwi </li>".



// textContent() method - changes or returns the text content of the specified node, 


var content = document.getElementById("big")

console.log(content.textContent);// prints 'hello', 'apple' and 'mango'. the previous texts 

content.textContent = "new text here"

console.log(content.textContent)


// remove child - used to remove an element of child


var Ulcontainer = document.getElementById("listofFruits")

var unwantedLi = document.getElementById("two")

console.log(Ulcontainer);
Ulcontainer.removeChild(unwantedLi);



// altering attribute - 


// used to give new class to name.
var myForm = document.getElementById("formID")

myForm.className = "formClass1, formClass2"; 

console.log(myForm.className) // prints formClass1, formClass2.

console.log(myForm.classList); // also prints a list containing the nnew class names "formClass1" and "formClass2"

 myForm.className = "firstHand, lastHand"

// class list - returns the class names of an element, this property can be can be used to add, remove and toggle CSS classes on an elemet. 


var classForLastName = document.getElementsByName("lastName") [0];

classForLastName.classList.add("myLastName"); // adds class name 

console.log(classForLastName.classList); // prints a DOmToken list containing the "myLastName" we just added above.

// Id property - the id property sets or returns the id of an element(the value of an elemnts id attribute.) 


var firstInputVal = document.getElementsByName("input")[0]; 

// id property - x  


// updating  Html-elements ///////////////

var el = document.getElementsByClassName("purple")

console.log(el);
el.className = "pink"
el.textContent= "ice_cream";


// you use the following properties and methods for that;
- createElement
- innerHTML // to add html element in tojavascript 
- textContent // to add text to html element
- appendChild/prepend // to add the changed code in js to html document body
- removeChild // to remove element from html document body .

var neba = document.createElement('div')

var psycho = document.createElement('div')

psycho.textContent = "abebe beso bela";

// updating  Html-elements ///////////////

// here you will add the html element to body 
document.body.appendChild(psycho)


// to add an attribute and new html code use inner html and outer to change the html out

psycho.innerHTML(<li>  </li>)
psycho.outerHTML(<p>  </p>)

// step from creating an html element to adding it to the body .
var ul = document.getElementById("listOfFruits")

var createdElement = document.createElement("li")

ul.prepend(createdElement)

// inner-html - used to list and update html contents inside an element 

var content = document.getElementById("bigId")

console.log(content.innerHTML); // prints all the inner Html under the div with "bigId" id

// know to change it 

content.innerHTML = "<li> kiwi </li>"



console.log(content.innerHTML)


var text = document.getElementById("bigId")
console.log(content.innerHTML)

content.innerHTML = "<li> kiwi </li>" // changing inner HTML of div (with "bigId" id ) to <li> kiwi </li>

console.log(content.innerHTML); // now prints <li> inner  </li>


var firstInputVal = document.getElementsByTagName("input")[0];

console.log(firstInputVal.getAttribute("name"))

// returns "firstNamen

// to style Css style using javascript///////////
// to style an element using js 
var secondLi = document.getElementById("two")
// to style font
secondLi.style.font = "bold 30px arial" // changes text font of 2nd <li>

console.log(secondLi.style.font) // prints "bold 30px arial"


// to style backgroundColor

var secondLi = document.getElementById("one")

secondLi.style.backgroundColor = "yellow" // changes the background color of 2nd <li> to yellow

console.log(secondLi.style.backgroundColor); // prints "yellow"

//  to style display
var h1Element = document.getElementById("title")
h1Element.style.display = "none"; // hides our <h1> 

console.log(h1Element.style.display); // prints "none" because we just hid our <h1> above.

// to style border


var divElement = document.getElementById("divID")

divElement.style.border = "thick solid red"

console.log(divElement.style.border); // returns "thick solid red"


var neba = document.getElementById("one");

neba.style.display = "none" // hides our h1 

console.log(neba.style.display) = "none" // prints "none" because we just our h1 above.

var beni = document.getElementById("four")

beni.style.margin = "70px"

console.log(h1Element.style.display); // prints "none" because we just hid our h1 above











