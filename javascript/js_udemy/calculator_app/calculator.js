var display = document.querySelector('#output')
var button = document.querySelectorAll('.calc_button')
console.log(button);
var val0 = document.querySelector('#output[value = "0"]')
var valV = val0.value
console.log(valV);

var button1 = document.querySelectorAll('.calc_button[value = "0"]')
// console.log(button1.textContent);



function appendToDisplay (input){
    if (display.value === "0") {
        display.value = input;
    } else {
        display.value += input;
    }
  
    
    
}
display.addEventListener('input', function(){


    
})
function clearDisplay(){

    display.value = ""
    
    
    
}


function calculate() {


    try{
        display.value = eval(display.value)
    }
   
    catch(error){

        display.value = "Error"
        

    }
    
}












