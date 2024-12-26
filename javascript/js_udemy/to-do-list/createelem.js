

// get the dom 
var btn = document.querySelector('button')
var style = btn.style.cssText = "background-color: #f2f3f4; border-bottom-left-radius: 1px solid black;"
var inputBox = document.querySelector('input')
var list = document.querySelector('.todo-list:nth-child(2)')
var input = document.querySelector('input')
var ul = document.querySelector('ul')
// create an empty var to store the inputs entered in input tag

var currentValue = ''
// set the function and event listner

input.addEventListener('input', function(e){

    // console.log(e.target.value);
    currentValue = e.target.value

    

})


input.addEventListener('keyup', function(e){

    if(e.keyCode === 13){
        addlist()
    }
})

function addlist (){
    // if currentv not epmty, not null and undefined execute the code else set an alert and stop executing this will prevent the button from executing an empty list when no input triggered

    if(currentValue !== undefined && currentValue !== null && currentValue !== ""){
        var newList = document.createElement('li')
        // console.log(newList.innerHTML);
        var p = document.createElement('p')
        
        // var text = document.createTextNode('List Item' + (ul.childElementCount + 2))
        var text = document.createTextNode(currentValue)
    
        // console.log(text);
        // console.log(text.childElementCount);
        // console.log(text.innerHTML);
        p.appendChild(text)
    
        // p.textContent = text
    
        newList.appendChild(p)
        // now give id for the list and it's current sequence number
    
        newList.id = 'item' + (list.childElementCount + 2)
        // console.log(newList.id);
        
        
        // and add the classes from the previous list to the new list created to inherit tailwind
        if (list){
            newList.classList.add(...list.classList)
            console.log(newList.classList);
            
        }
        // now append the newly created list to the orignal list to continue listing
        ul.appendChild(newList)
        // console.log(list);
        
        //  see in the console the number of the elementcount
        console.log(list.childElementCount);
    
    // 
        input.value = ''
        currentValue = ''
    }else{
        // const style = "body{background-color : red ; }"

        // const styleTag = document.createElement('style')

        // styleTag.textContent = style;

        // document.head.appendChild(styleTag)
        // console.log(document.head);
        
        
        // document.body.style.cssText = {
        //     backgroundColor : "red"
            

        // }
        alert("please insert a todo list running out of ideas ?")
    }
    


    
}

        
        btn.addEventListener('click', addlist )



