


// // traversing - means selecting elements by calling them from their parent or sibling(same-tree) if the element doesnt have class or id name select it from its element

// // - parentNode - to find paret ele
// ex; var parent = document.getElementById("red") 

// var node = parent.parentNode
// console.log(node );

// // previousElementSibling
// // ex.  

// // nextElementSibling
// var el = document.querySelector("yellow")

// var next = el.nextElementSibling
// console.log(next);

// next.className = "neba";


// // method to select from parent to child.
// console.log(document.getElementById("ul").firstElementChild);
// // from  child to parent
// console.log(document.getElementById("ul").parentElement);

// // nth-child(2)
// console.log(document.querySelectorAll(".red:nth-child(2)"));


//  downWard

var downWard = document.getElementById(("listOfFruits").firstElementChild);// selects the first element child of the parent

var downWard1 = document.getElementById(("listOfFruits").lastElementChild)
// upWard

// var upWard = document.getElementById("")

console.log(document.getElementById(("listOfFruits").firstElementChild))
// console.log();

// finding element upWards/parent
// method parent element
console.log(document.getElementById("three").parentElement);

// method closest - used for example to find the closest parent element  

console.log(document.getElementById("four").closest)


// finding element side ways 
console.log(document.getElementById("two").previousElementSibling);


console.log(document.getElementById("two").nextElementSibling)


console.log(document.getElementById("three"))

var bena = document.querySelectorAll
(".red:nth-child(2)")
console.log(document.querySelectorAll(".red:nth-child(2)"));



var el = document.createElement("p")

console.log(el)

el.textContent = "abebe beso bela"

document.body.appendChild(el)

 









