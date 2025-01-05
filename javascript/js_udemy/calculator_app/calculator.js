var display = document.querySelector('#output')
var button = document.querySelectorAll('.calc_button')
console.log(button);

function appendToDisplay (input){

display.value += input;
    
    
    
}

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












