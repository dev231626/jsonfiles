
var btn = document.querySelector("#toggle_sidebar")


var  sidebar = document.querySelector("#sidebar")


btn.addEventListener('click', function(){
if(sidebar.classList.contains("show")){
    
        sidebar.classList.remove("show")
    sidebar.classList.add("hide")
}else{
        sidebar.classList.add("show")
    sidebar.classList.remove("hide")
    
}     

})

//key board event
// to show key code
// var body = document.querySelector("body")

// body.addEventListener("keypress", eba)
// body.addEventListener("keyup", neba)
// body.addEventListener("keydown", ben)

// function (e){
// var keyCode = e.keyCode 
// if(keyCode === 13){
// console.log("keypress for => " + keyCode);
    
// }
// }
// function neba(e){
// var keyCode = e.keyCode 
// if(keyCode === 13){
//     console.log("keyup for => " + keyCode );

// }
// }
// function ben(e){
// var keyCode = e.keyCode 
// if(keyCode === 13){
//     console.log("keydown for => " + keyCode);
    
// }
// }


// document.body.addEventListener('keypress', function (e){
//     var keyCode = e.keyCode 
//     if(keyCode === 16){
//     console.log("keypress for => " + keyCode);
//     }
//     } )


// document.body.addEventListener("keyup", function(e){
    
//     var keyCode = e.keyCode 
//     if(keyCode === 16){
//     console.log("keyup for => " + keyCode);
//     }
// })

// document.body.addEventListener("keydown", function(e){
    
//     var keyCode = e.keyCode 
//         if(keyCode === 16){
//     console.log("keydown for => " + keyCode);
//     }
// })
document.body.addEventListener("keydown", function(e){
    
    var keyCode = e.keyCode 
    console.log("keydown for => " + keyCode);
})















