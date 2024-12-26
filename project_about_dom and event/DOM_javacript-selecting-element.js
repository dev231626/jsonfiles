// Dom  is generally used to select and modify/manipulate the html document in javascript

var aabeb = {
    html: {
        head: {
            title: {
                value: "the title"
            }
        }
    }
}


console.log(aabeb.html.head.title.value = "abebe")


//   how to get element from css to manipulate html

// 1, get element by id - 
var   abeba;
abeba = document.getElementById("yellow")


//  2, quey selector - to select only one element

console.log(document.querySelector("#two"));

// multiple selectors .......
// 3, get element by class name - selects muliple elements.

let neba = document.getElementsByClassName("red")
// you can also select specific element  by using [0] square bracket. 
console.log(neba[0]);

//4,  get element by tag name - 
document.getElementsByTagName(tagname)

getElementsByTagName('li')


// 5 query-selector-all = selects all elements which are similar to the asigned.
console.log(document.querySelectorAll(".red"));

// multipe selector/////////
// querry selectors - lists the elemnts by nodeList where as element selectors list with htmlCollections.

var el = document.querySelector(".yellow")

el.item(0);
el.item(1);

// traversing - selecting an element from its neighbouring element

document.getElementById(("listOfFruits" ).firstElementChild ) // prints the first element of the list.

document.getElementById(("listOfFruits" ).lastElementChild ) // prints the last li under ul.

// traversing upWards - 
document.getElementById(("listOfFruits" ).parentElement ) // prints the <ul> which is the parent to all the <li>

// traversing closest - to print the closest parent
document.getElementById(("listOfFruits" ).closest )
// traversing sideways - 

// previousElementSibling - selects the previous element of the element

document.getElementById(("three" ).previousElementSibling ) // prints the 2nd li of the third li.
// nextElementSibling - selects the next element from current element in the same tree level
document.getElementById(("listOfFruits" ).nextElementSibling )



 