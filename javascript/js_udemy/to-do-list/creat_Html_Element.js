
var List = document.getElementById('todo-list')

var firstItem = document.getElementById('item1')

var newListElement = document.createElement('li')

var btnAdd = document.getElementById('add-item')

// newListElement.appendChild (document.createTextNode('List Item 3 '))

newListElement.appendChild(document.createTextNode('List Item 3'))
newListElement.id = "item3"
console.log(newListElement);

btnAdd.addEventListener("click", function(){
    
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode('List Item ' + (List,this.childElementCount + 1) )
    newListElement.appendChild(textNode)
    newListElement.id = "item3" + (List.childElementCount + 1)
    List.appendChild(newListElement)    

    // use insert before function to insert elements before specific element 
    // List.insertBefore(newListElement, firstItem) first accepts what to be inserted and second accepts before what element to be inserted
    List.insertBefore(newListElement, firstItem)
    
    
    
})

















