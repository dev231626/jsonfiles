




var btn = document.getElementById("top-btn")


btn.addEventListener("mousedown", function(){

    console.log('mouse down event');
    
    
})


var btn = document.getElementById("top-btn")


btn.addEventListener("mouseup", function(){

    console.log('mouse up');
    
    
})


var btn = document.getElementById("top-btn")


btn.addEventListener("click", function(){

    console.log('click event');
       document.body.style.backgroundColor = ""
    
})
var btn = document.getElementById("top-btn")


btn.addEventListener("dblclick", function(){

    console.log('double click');
    document.body.style.backgroundColor = "blue"
    
})



var over = document.getElementById("over" )
var overCount = 0
over.addEventListener("mouseover", function(){

    console.log('mouse overed');
    
    var count = document.querySelector(".counter > h3")
     overCount += 1
    count.innerHTML = overCount;
    
    
})



var enter = document.getElementById("enter")
var overCount = 0
enter.addEventListener("mouseenter", function(){

    var countel = document.querySelector("#h3_2") 

    overCount += 1
    countel.innerHTML = overCount
    console.log("mouse entered");
    
})

var move = document.getElementById("move")

var count = 0

move.addEventListener("mousemove", function(){

    var countelement = document.querySelector("#h3_3")
    
    count += 1

    countelement.innerHTML = count
})




