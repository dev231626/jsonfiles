

// get the dom 
var btn = document.querySelector('#Add')
var style = btn.style.cssText = "background-color: #f2f3f4; border-bottom-left-radius: 1px solid black;"
// var inputBox = document.querySelector('input')
let list = document.querySelector('li')
let list1 = document.querySelector('ul:nth-child(1)')
var input = document.querySelector('input')
var ul = document.querySelector('ul')
console.log(ul);
var updatebtn = document.getElementById('update')
var removeBtn = document.getElementById('remove')
var span = document.querySelector('span')
console.log(span.outerHTML);

// create an empty var to store the inputs entered in input tag

var currentValue = ''
// set the function and event listner

input.addEventListener('input', function (e) {

    // console.log(e.target.value);
    currentValue = e.target.value
    // console.log(currentValue);
    


})


input.addEventListener('keyup', function (e) {

    if (e.keyCode === 13) {
        addlist()
    }
})

// create a new function for the first li to be updated and return it to call it when update is triggered
function addNewNode() {

    var newList = document.createElement('li')
    // console.log(newList.innerHTML);
    var p = document.createElement('p')

    // var text = document.createTextNode('List Item' + (ul.childElementCount + 2))
    var text = document.createTextNode(currentValue)

// Create the icon
var icon = document.createElement('span');
icon.classList.add('material-icons', 'float-right', 'cursor-pointer');
icon.textContent = 'delete'; // Use the Material Icon name
icon.style.cursor = 'pointer';

// Add event listener to the icon for deletion
icon.addEventListener('click', function () {
    ul.removeChild(newList);
    ul.removeChild(list1)
});

    

    // Append the icon to the paragraph
    p.appendChild(text)
    p.appendChild(icon);


            icon()

    newList.appendChild(p)
    // now give id for the list and it's current sequence number

    newList.id = 'item' + (list.childElementCount + 2)

    return newList;

}





















function addlist() {
    // if currentv not epmty, not null and undefined execute the code else set an alert and stop executing this will prevent the button from executing an empty list when no input triggered

    if (currentValue !== undefined && currentValue !== null && currentValue !== "") {
        // // store the function newnode to var 
        // var updatedLIst = addNewNode();
        // ul.appendChild(updatedLIst)

        var newList = document.createElement('li')
        // console.log(newList.innerHTML);
        var p = document.createElement('p')

        // var text = document.createTextNode('List Item' + (ul.childElementCount + 2))
        var text = document.createTextNode(currentValue)


        var icon = document.createElement('span');
        icon.classList.add('material-symbols-outlined', 'float-right', 'cursor-pointer');
        icon.textContent = 'delete'; // Use the Material Icon name
        icon.style.cursor = 'pointer';
        // console.log(text);
        // console.log(text.childElementCount);
        // console.log(text.innerHTML);

        icon.addEventListener('click', function () {
            ul.removeChild(newList);
            ul.removeChild(list)

        });



        p.appendChild(text)
        p.appendChild(icon);


        
        newList.appendChild(p)
        // now give id for the list and it's current sequence number

        newList.id = 'item' + (list.childElementCount + 2)


        // and add the classes from the previous list to the new list created to inherit tailwind
        if (list) {
            newList.classList.add(...list.classList)
            // console.log(newList.classList);
 

        }
        // now append the newly created list to the orignal list to continue listing
        ul.appendChild(newList)

        console.log(list.childElementCount);

        // 
        input.value = ''
        currentValue = ''
    } else {

        alert("please insert a todo list running out of ideas ?")
    }
}


btn.addEventListener('click', addlist)

// updatebtn.addEventListener('click', updateLIst)
updatebtn.addEventListener('click', updateNextSequentially)

function updateLIst() {
    // use firstElementChild property to select the first element child ignoring white spaces and comments 
   var firstElement = ul.firstElementChild
    console.log(firstElement);
    
   if(firstElement) {
    
    var paragraph = firstElement.querySelector('p')
    console.log(paragraph);
    
    if (paragraph){
        // get the first child inside p which is the text
        var textNode = paragraph.firstChild;
        
        if(textNode && currentValue){

            textNode.textContent = currentValue; // Update the text content
        }
    }

   }


}



// Variable to track the current item being updated
let currentIndex = 0;

function updateNextSequentially() {
    // Get all the <li> elements
    const listItems = ul.children;

    if (currentIndex < listItems.length) {
        // Select the current <li> based on the index
        const currentItem = listItems[currentIndex];

        // Find the <p> tag inside the current <li>
        const paragraph = currentItem.querySelector('p');

        if (paragraph) {
            const textNode = paragraph.firstChild; // Get the text node the from the first line 

            // Update the text content
            if (textNode && currentValue) {
                textNode.textContent = currentValue;
                console.log(`Updated item ${currentIndex + 1} to "${currentValue}"`);

            }
        }

        // Move to the next item 
        currentIndex++;
    } else {
        alert("All items have been updated!");
        console.log("No more items left to update.");
    }
}




let removeIndex = ul.children.length -1 ; 

function removeallSequentially(){

if (removeIndex >= 0){

    const listItems = ul.children // selects the lsit of items

    const itemToRemove = listItems[removeIndex] // gets the last item to be removed 

    // now write a if statement to remove the last item of ul which the last item has been given
    if(itemToRemove){

        ul.removeChild(itemToRemove)       
        console.log(`item has been removed successfully ${itemToRemove + 1}`);
        
        // after that make the index of the removed item to count from last to first  (concatinate backwards)

    removeIndex-- ;

    }else{ // else stat to alert when all items has been removed
        alert('all items have been removed')
        console.log('all items have been removed');
        
    }
    
    // add event listener when removebtn is clicked to the function to be executed

    
    
}
    


    
}

removeBtn.addEventListener('click', removeallSequentially)
span.addEventListener('click', removeallSequentially)



















