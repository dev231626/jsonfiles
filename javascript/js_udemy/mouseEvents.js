
// ?mouse events 

var btn = document.getElementById("top-btn")

btn.addEventListener("mousedown", function(){

    console.log("mouse down event");
    
    
    
})
btn.addEventListener("mouseup", function(){

    console.log("mouse up event");
    
    
    
})
btn.addEventListener("click", function(){

    console.log("mouse click event");
    
    
    
})



var over = document.getElementById('over')

var overCount = 0

over.addEventListener('mouseover', function(){

    var countElement = document.querySelector('#over > p')
    
    overCount += 1
    
    countElement.innerHTML = overCount;
    
    
})

var enter = document.getElementById('enter')


var enterCount = 0;

enter.addEventListener('mouseenter', function(){

    var countElement = document.querrySelector('#enter > p')
    
    enterCount += 1

    countElement.innerHTML = enterCount;
    

})

var move = document.getElementById("move")


var moveCount = 0;

move.addEventListener('mousemove', function(){

    var moveElement = document.querrySelector("#move > p")
    
    moveCount += 1 
    
    moveElement.innerHTML = moveCount;
    
    
    
    
    
    
})








