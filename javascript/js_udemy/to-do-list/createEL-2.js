
// removeBtn.addEventListener('click', function(){

//     var firstName = list.firstElementChild;
//     console.log(firstName.textContent);

//     let removedValue = ''  

//     if(firstName.textContent = "" ){
//         // cosole.log(firstName.value)
//         function restoreValue(){

//             var storedValue = sessionStorage.getItem('storedValue')


//             if (storedValue) {
//                 document.getElementById('myInput').value = storedValue; // Restore the value
//                 console.log('Text restored from session storage:', storedValue);
//               } else {
//                 alert('No stored value found');
//               }

//          }

//     }else{


//         function clearText(){

//             var inputValue = input.value
//             console.log(inputValue.valueOf);

//             sessionStorage.setItem('storedValue', inputValue)


//             input.value = ''
//             console.log('text removed and saved', inputValue);

//             removedValue = input.value



//          }


//     }





// })


function updateNextList() {
    // Find the first list item
    var firstElement = ul.firstElementChild;

    if (firstElement) {
        // Find the next sibling of the first <li>
        var nextElement = firstElement.nextElementSibling;

        if (nextElement) {
            // Find the <p> inside the next <li>
            var paragraph = nextElement.querySelector('p');

            if (paragraph) {
                // Update only the text content while keeping the span (icon) intact
                var textNode = paragraph.firstChild; // Get the text node
                if (textNode && currentValue) {
                    textNode.textContent = currentValue; // Update the text content
                }
            }
        } else {
            alert("There is no next list item to update!");
        }
    } else {
        alert("No list items found!");
    }
}




function updateAllLists() {
    var currentItem = ul.firstElementChild;

    while (currentItem) {
        var paragraph = currentItem.querySelector('p');
        if (paragraph) {
            var textNode = paragraph.firstChild; // Get the text node
            if (textNode && currentValue) {
                textNode.textContent = currentValue; // Update the text content
            }
        }
        currentItem = currentItem.nextElementSibling; // Move to the next list item
    }
}


// document.querySelectorAll('.static-list').forEach(function (li) {
//     var icon = document.createElement('span');
//     icon.classList.add('material-symbols-outlined', 'float-right', 'cursor-pointer');
//     icon.textContent = 'delete';
//     icon.style.cursor = 'pointer';

//     // Attach event listener to delete the specific list item
//     icon.addEventListener('click', function () {
//         ul.removeChild(li);
//     });

//     // Append the icon to the pre-existing list item's <p>
//     li.querySelector('p').appendChild(icon);
// });




// function removeChild() {

//     // var firstElement = ul.firstElementChild;

//     // console.log(firstElement.innerHTML);

//     // ul.removeChild(firstElement) 

//     while(ul.lastElementChild[0]){

//         var i;
//         for(i = 0;  i < ul.children.length; i++){
        
//         ul.removeChild(ul.lastElementChild[i])

//         }
        
        
//     }
    
//     console.log('all lists have been removed');

// }

// function removeAllListsWithFor() {
//     const items = ul.children; // Get all the children of the <ul>
//     const length = items.length; // Store the initial length

//     for (let i = length - 1; i >= 0; i--) {
//         ul.removeChild(ul.lastElementChild);
//     }

//     console.log("All lists have been removed (using for loop).");
// }



// // create the default list
// var list = document.createElement('li')

// list.classList.add('bg-white',  'container',  'w-96 mt-auto',	  'm-3',  'no-underline', 'flow-root',	'todo-list')
// var p = document.createElement('p')

// var text = document.createTextNode('')

// // Create the icon
// var icon = document.createElement('span');
// icon.classList.add('material-icons', 'float-right', 'cursor-pointer');
// icon.textContent = 'delete'; // Use the Material Icon name
// icon.style.cursor = 'pointer';

// // Add event listener to the icon for deletion
// icon.addEventListener('click', function () {
// ul.removeChild(newList);
// ul.removeChild(list1)
// });
// ul.appendChild(neba)

// var neba = `<li class="bg-white  container  w-96 mt-auto	  m-3  no-underline flow-root	todo-list ">
//                 <p>List item 1 <span class="material-symbols-outlined float-right cursor-pointer">
//                     delete
//                     </span></p>
//             </li>
//             <li class="bg-white container  w-96	mt-auto  m-3  no-underline	    todo-list ">
//                 <p>List item 2  <span class="material-symbols-outlined float-right cursor-pointer">
//                     delete
//                     </span></p>
//             </li>`


// const items = ['List-Item 1', 'List-Item 2'];
// const list = document.createElement('li');

// items.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     var p = document.createElement('p')

//     // var text = document.createTextNode('List Item' + (ul.childElementCount + 2))
//     var text = document.createTextNode(currentValue)

// // Create the icon
// var icon = document.createElement('span');
// icon.classList.add('material-icons', 'float-right', 'cursor-pointer');
// icon.textContent = 'delete'; // Use the Material Icon name
// icon.style.cursor = 'pointer';

// // Add event listener to the icon for deletion
// icon.addEventListener('click', function () {
//     ul.removeChild(newList);
//     ul.removeChild(list1)
// });

    

//     // Append the icon to the paragraph
//     p.appendChild(text)
//     p.appendChild(icon);
//     ul.appendChild(li);
// });





// Append the icon to the paragraph
// p.appendChild(text)
// p.appendChild(icon);