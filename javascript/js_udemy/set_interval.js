


// updating html element
// var countdownElement = document.getElementById("countdown")


// var initialCountdownVal = countdownElement.innerHTML;

// let count = 10;
// const timer = setInterval(function() {
//   count--;
//   countdownElement.innerHTML = count
//   console.log(count);

//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//     count.innerText = "times up"
    
//   }
//   if(count % 2 === 0){
//       document.body.style.backgroundColor = "red"
//   }else{
//     document.body.style.backgroundColor = "blue"

    
//   }
// }, 1000);

// var neba = document.createElement("h1") 
// neba.innerHTML = "<h1> neba </h1>"
// neba.innerText = "neba"
// var body = document.querySelector("body")
// body.append(neba)
// neba.setAttribute("class", "neba")


// setInterval(() => {
//     initialCountdownVal = 
//     initialCountdownVal > 0 ? initialCountdownVal - 1  : 0;
// countdownElement.innerHTML = initialCountdownVal;

// countdownElement.innerHTML = initialCountdownVal;


// }, 1000)

// setInterval(() => {

//     countdownElement.innerHTML = initialCountdownVal;
    
//     if(initialCountdownVal > 0){
//         initialCountdownVal.innerHTML -= 1
//     }else{
//         initialCountdownVal.innerHTML = 0
//     }

    
    
// }, 1000);


// updating style
// var countdownElement = document.getElementById("countdown")
// document.body.style.backgroundColor = "red"
//  countdownElement.style.fontSize = "1000px"
//  countdownElement.style.textAlign = "center"
 
//  let count = 10;
// const timer = setInterval(function() {
//   count--;
//   countdownElement.innerHTML = count
//   console.log(count);
//   countdownElement.style.cssText = "fontsize: 300px"
//   countdownElement.style.fontSize = count * 100 + "px"

//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//     count.innerHtml = "<h1>times up</h1>"
    
//   }
//   if(count % 2 === 0){
//       document.body.style.backgroundColor = "red"
//   }else{
//     document.body.style.backgroundColor = "blue"


//   }
  
 
// }, 1000);

var countdownElement = document.getElementById("countdown")
var initialCountdownVal = countdownElement.innerHTML
var backImg = document.querySelector(".decreasing_val")
console.log(backImg.outerHTML)

var interval = setInterval(function() {
      
    initialCountdownVal = initialCountdownVal > 0 ?
    initialCountdownVal - 1 : 0; 

    countdownElement.innerHTML = initialCountdownVal;
    
    countdownElement.style.fontSize =  initialCountdownVal * 10 + "px"  
console.log(
   countdownElement.style.fontSize =  initialCountdownVal * 10 + "px" );

   if(initialCountdownVal % 2 === 0){
      backImg.style.backgroundImage = "linear-gradient(purple, green)"
      
}
else{
    backImg.style.backgroundImage = "linear-gradient(red, green)"

   }

backImg.style.width = initialCountdownVal * 10 + "%"
if(initialCountdownVal <= 0)
{   clearInterval(interval) }



}, 1000);














