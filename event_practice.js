

// function abebe(){

//     alert("hello abebe");
    
    
// }


// function neba(){
    
//     document.body.style.backgroundColor = "yellow"
    
// }


// function beni(){

//     document.body.style.backgroundColor = "white"
    
// }

// function color(){
//     let neba = document.getElementById("five")

//     neba.style.color = "blue"
//     neba.style.backgroundColor = "red"
// }
// function removeColor(){

//     let abi = document.getElementById("five")
//     abi.style.color = "black"
//     abi.style.backgroundColor = "white"
// }
// color();

// function color(){

//     document.style.backgroundColor = "yellow"
    
// }


//     var bt11 = document.getElementById("bt1")
//     var bt2 = document.getElementById("bt2")

//     bt11.addEventListener("mouseover", neba)
    
//     bt11.addEventListener("click", beni)
    
//     bt11.addEventListener("dblclick", rera)

//     bt11.addEventListener("mouseleave", rani)
//     bt11.addEventListener("mouseup", third)
// // in this version to refer specific element you should call document and element name
// function neba()  {
//     bt2.style.boxShadow = "1px 2px 10px yellow"

// }


// function beni(){

//     bt2.style.boxShadow = ""
// }

// function rera(){

//     bt2.style.display = "none"
// }

// function rani(){

//     bt2.style.display = "block"
// }


// function third(){

//     bt2.style.transition
// }





// halt default behaviour - when trying to stop the normal behaviour of an element or change its functionality we use halt default behaviour methods for example when you don't want the submit button to submit form when required filled are not filled out.

// methods to stop these default Html behaviors.

// - preventDefault();
// - stopPropagation();


// let merLink = document.getElementById("a")

// console.log(merLink);

// merLink.addEventListener("click", run)



// function run(f){

// f.preventDefault()
//     merLink.textContent = "hello billionaires"
//     merLink.style.fontWeight = "700"
//     merLink.style.fontSize = "60px"
//     merLink.style.textAlign = "center"
//     merLink.style.marginTop = "90px"
//     merLink.style.color= "black"
//     merLink.style.margin ="0 auto" 
// }






// practice assignment


var form = document.getElementById("form")

function checkName(e){
e.preventDefault()
let inputs = document.getElementsByClassName(" .inputs")
console.log(checkName);

inputs[0].style.backgroundColor = ""
inputs[1].style.backgroundColor = ""
console.log(checkName);



    if(inputs[0].value.length == 0 && isNaN(inputs).value == false){
     inputs[0].style.backgroundColor = "pink"
        
    }
    if(inputs[1].value.backgroundColor == 0 && isNaN(inputs).value == false){
        inputs[1].style.backgroundColor = "pink"
        

    }

    if(inputs[0].value.length != 0 && inputs[1].value.length || isNaN(inputs[0]).value && isNaN(inputs[1]) == true ){

        let outPut = inputs[0].value + " " + inputs[1].value;

        let result = document.getElementById("result")

        result.textContent = outPut;
        
    }

    
    console.log(inputs);
    console.log(checkName());
    
    
}

form.addEventListener("submit", checkName)

var beni = document.getElementsByTagName("form") 

function deba(e){

    e.preventDefault();
    let inputes = document.getElementById("four  ")

    inputes[0].style.backgroundColor = ""
    inputes[1].style.backgroundColor = ""

// if input values length is more than zero print a color input as an error
    if(inputes[0].value.length == 0){

        inputes[0].style.backgroundColor = "red"
        
    }
    if(inputes[1].value.length == 0){

        inputes[1].style.backgroundColor = "red"
        
    }
    
    if(inputes[0].value.length != 0 && inputes[1].value.length != 0){

        let outPut = inputes[0].value + " " + inputes[1].value

        let outPut  = Number(inputes[0].value) + Number(inputes[1].value) 
        let result = document.getElementById("result")
         result.textContent = outPut; 
                
    }
}


beni.addEventListener("submit", deba)



var formed = document.getElementById("form")

function forms (){
    

    var inputsr = document.getElementsByClassName("input")
    // select the first and the second inputs with there background color style empty to add color when certain event happens to them
    inputsr[0].style.backgroundColor = "" 
    inputsr[1].style.backgroundColor = ""
    // if one of the  input that the user enters equal to zero length or none input is submited print certain alert or color

    if(inputsr[0].value.length == 0){

    inputsr[0].style.backgroundColor = "pink" 
        
        
    }

    if(inputsr[1].value.length == 0){

    inputsr[1].style.backgroundColor = "pink" 
    
    
        
    }
    
    
    // if both of inputs have been filled  concatinate the words entered on both inputs respectively and print them below the submit button together   

    if(inputsr[0].value.length != 0 && inputsr[1].value.length != 0 ){
        
        let outPut = inputsr[0].value + " " + inputsr[1].value 


        let addedParagrph = document.getElementById("result")

        addedParagrph = outPut;
        
        
    }
    


    
    
    
}



formed.addEventListener('submit', forms)











var form = document.getElementById("form")

function input(e){
   preventDefault(e);
    var input = document.getElementById("input");


    input[0].style.backgroundColor = "";
    input[1].style.backgroundColor = "";
    
    
    if (input[0].value.length == 0){

        input[0].style.backgroundColor = "pink";
        alert(' please enter your first_name');
        
    } 
    if (input[1].value.length == 0){
        input[1].style.backgroundColor = "pink";

        alert(' please enter your password')
        
    } 
    if(input[1].value.length <=  5){
        alert('password is empty or not more than 5 characters')
        
    }else if(input[0].value.length != 0 && input[1].value.length != 0){
        alert("thanks")
        let outPut = input[0].value + " " + input[1].value;
        let outPut = Number(input[0].value) + Number(input[1].value);
        let  h1 = document.getElementById("result");
        
        h1 =  outPut;
        
    }
     
    
}

form.addEventListener("submit", input)












