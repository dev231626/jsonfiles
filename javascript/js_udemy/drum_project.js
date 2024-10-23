
var A = document.querySelector(".A")
var S = document.querySelector(".S")
var D = document.querySelector(".D")
var F = document.querySelector(".F")
var G = document.querySelector(".G")
var H = document.querySelector(".H")
var J = document.querySelector(".J")
var K = document.querySelector(".K")
var L = document.querySelector(".L")

var source = document.querySelector("source")

console.log(source.outerHTML);
console.log(source.src);

document.body.addEventListener("keydown", function(e){

  if(e.keyCode == 65){
     document.querySelector("#audio1").play()
     A.style.boxShadow = "2px 2px 3px 5px yellow"
     A.style.borderColor = "yellow"
setTimeout(() => {
  A.style.boxShadow = ""
  A.style.borderColor = ""
  
}, 100);

  }
  
  
  if(e.keyCode == 83){
    document.querySelector("#audio2").play()
     S.style.boxShadow = "2px 2px 3px 5px yellow"
     S.style.borderColor = "yellow"
     
setTimeout(() => {
  S.style.boxShadow = ""
  S.style.borderColor = ""
  
}, 100);

  }
    
  
  if(e.keyCode == 68){
    document.querySelector("#audio3").play()
     D.style.boxShadow = "2px 2px 3px 5px yellow"
     D.style.borderColor = "yellow"
     
setTimeout(() => {
  D.style.boxShadow = ""
  D.style.borderColor = ""
  
}, 100);

  }
    
  
  if(e.keyCode == 70){
    document.querySelector("#audio4").play()
     F.style.boxShadow = "2px 2px 3px 5px yellow"
     F.style.borderColor = "yellow"
     
setTimeout(() => {
  F.style.boxShadow = ""
  F.style.borderColor = ""
  
}, 100);

  }
    
  
  if(e.keyCode == 71){
    document.querySelector("#audio5").play()
     G.style.boxShadow = "2px 2px 3px 5px yellow"
     G.style.borderColor = "yellow"
     
setTimeout(() => {
  G.style.boxShadow = ""
  G.style.borderColor = ""
  
}, 100);

  }
    
  
  if(e.keyCode == 72){
    document.querySelector("#audio6").play()
   
      H.style.boxShadow = "2px 2px 3px 5px yellow"
     H.style.borderColor = "yellow"
      
setTimeout(() => {
  H.style.boxShadow = ""
  H.style.borderColor = ""
  
}, 100);

  }
  
  if(e.keyCode == 74){
    document.querySelector("#audio7").play()
   
      J.style.boxShadow = "2px 2px 3px 5px yellow"
     J.style.borderColor = "yellow"
      
setTimeout(() => {
  J.style.boxShadow = ""
  J.style.borderColor = ""
  
}, 100);

  }
  
  if(e.keyCode == 75){
    document.querySelector("#audio8").play()
   
      K.style.boxShadow = "2px 2px 3px 5px yellow"
     K.style.borderColor = "yellow"
      
setTimeout(() => {
  K.style.boxShadow = ""
  K.style.borderColor = ""
  
}, 100);

  }
  
  if(e.keyCode == 76){
    document.querySelector("#audio9").play()
   
      L.style.boxShadow = "2px 2px 3px 5px yellow"
     L.style.borderColor = "yellow"

setTimeout(() => {
  L.style.boxShadow = ""
  L.style.borderColor = ""
  
}, 100);

  }
  
  
})


















