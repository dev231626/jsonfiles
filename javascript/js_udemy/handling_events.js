


var btn = document.getElementById("btn-click")

// btn.onclick = function  (){

//     alert("btn clicked")
    
// }

function onBtnClick(){
    
    
    document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")" 
    
    

    
}

btn.onclick = onBtnClick




// adding and removing a class

var h1 = document.querySelector("h1")

h1.classList.add("big")

// setTimeout(function(){

// btn.classList.remove("big")
    
// }, 1500 )

btn.addEventListener("click", reduce)

function reduce(){
    h1.classList.remove("big")
    
    
}
btn.addEventListener("dblclick", returnn)

function returnn(){
    h1.classList.add("big")

}










