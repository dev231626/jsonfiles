

// var formSubmit = document.getElementById("form")
// function checking(e) {// checking if the user has entered right 
// // // make an array to display the error message when encountered
// // var error = []

// // // select the div which the error message is going to be displayed.
// // // selectig Elements
// var error =[]
// var errorDisplay = document.getElementById("display_error")
// console.log(errorDisplay);

// var firstName = document.getElementsByName("first_name")
// console.log(firstName);

// var lastName = document.getElementsByName("last_Name")

// console.log(lastName);


// var password = document.getElementsByName("password") 
// console.log(password);

// // get there values 

// var firstNameValue = firstName[0].value
// console.log(firstNameValue, "first name first value");

// var lastNameValue = lastName[0].value
// console.log(firstNameValue, "last name first value");
// var passwordValue = password[0].value
// console.log(firstNameValue, " password first value  ");
// // now write a function that checks if the fields are filled and if they are correct

// if(!firstNameValue)
// {
//     // alert("first name is required ")
//      error.push("firstName required ")
//     firstName.style.border = "1px solid pink"
//     console.log(error, "error message for the first name");
    
// }

// if(!lastNameValue){

//     // alert("last name value is required")
//      error.push("last name required")
//     lastName.style.border = "1px solid pink"
//     console.log(error, "error message for the last name");
    
    
// }
// if(!password){
//     // alert("password is required")
//   error.push("password is required")

//   console.log(error, "error message for the password");
    
    
// }

// if(password.value.length < 5){
     
//     error.push("password is no longer than 5 characters ")
//     console.log(error, "error message for the password not longer than 5 ");
//     // alert("password is required")
// }

// if(error.length > 0){

//     e.preventDefault();
//     errorDisplay.style.display = "block" 
//     console.log(errorDisplay);
    
//     for(var i = 0; i < error.length ; i++){

//         errorDisplay.innerHTML += error[i] + "<br>";
        
//      console.log(errorDisplay);
     
        
//     }
    
//     console.log(checking());
    
    
    
// }






// }
// console.log(checking());

// from evenagadi
//  


// check if password empty on blur.

// first select the elements that you want to modify 
// inputs(firstName, lastName, password), the div you want to display the error when encountered and we will use the blur method to check if the word is empty or inserted when blur(which means when cursor is removed from the form)
// select the first element of the value when inserted to check if the client has insered any value [0]
// now write a function that checks if name is inserted or not if not displays an error message by displaying block

// selecting elements phase. 
// var first_name = document.getElementsByName("first_name")

// var last_Name = document.getElementsByName("last_name")

// var password = document.getElementsByName("password")

// var first_name_Element = first_name[0];

// var last_name_Element = last_Name[0];

// var password_Element = password[0];

// first_name_Element.onblur = checkNameValue;
// last_name_Element.onblur =  checkNameValue

// password_Element.onblur = checkPasswordValidity;

// // function
// var form = document.getElementById("form")
// // function checkingForName (){

// // var errorDipslayer = document.getElementById("display_error")

// // var first_name = document.getElementsByName("first_name")

// // var last_Name = document.getElementsByName("last_name")

// // var first_name_Element = first_name[0];
    
// // var last_name_Element = last_Name[0];
// // }

// function checkNameValue(e){
// e.preventDefault()
// var errorDipslayer = document.getElementById("display_error")

// var first_name = document.getElementsByName("first_name")
    
// var last_Name = document.getElementsByName("last_Name")
    
// var first_name_Element = first_name[0].value.length;
    
// var last_name_Element = last_Name[0].value.length;

// // var first_name_value =  checkNameValue.value;

// // var last_name_value =    checkNameValue.value;

// if(!first_name_Element || !last_name_Element){

//     errorDipslayer.style.display = "block"
    
//     errorDipslayer.innerHTML += "name is required make sure to insert all the names"
    
//     first_name.style.border = "1px solid pink"

// } else{
//     alert("submitted")

// } 



// function checkPasswordValidity(){
//     e.preventDefault()

// var errorDipslayer = document.getElementById("display_error")
    
// var password = document.getElementsByName("password")
    
// var password_value = password[0].value    
// var funcCheckPassword = checkPasswordValidity;

// if(!password_value || password_value.length < 5){

    
//     errorDipslayer.style.display = "block"
    
//     errorDipslayer.innerHTML += "password is not inserted or not greater than 5 characters" 
    
//     password.style.border = "1px solid pink"
// }else{
//     alert("submitted")
// }


// }







// }


// // form.addEventListener("blur", checkNameValue )
// // form.addEventListener("blur", checkPasswordValidity )



var form = document.getElementById("form")

form.addEventListener("submit", checkValue)
form.one

var form = document.getElementById("form");
form.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
}); 

function checkValue(e){
 var error = []
 var display_error = document.getElementById("display_error")

 display_error.innerHTML = ''
   
   
    var first_name = document.getElementsByName("first_name")
    
    var last_name = document.getElementsByName("last_name")
    
    var password = document.getElementsByName("password")

    var first_name_value = first_name[0].value
    
    var last_name_value = last_name[0].value

    var password_value = password[0].value

    
    
    if(!first_name_value){

        error.push("first name is invalid")
    }
    
    if(!last_name_value){

        error.push("last name is invalid")
    }
    
    if(!password_value){

        error.push("password is invalid")
    }else if(password_value.length < 5){

        error.push("password is no longer than 5 characters")
        
    }
    
    if (error.length > 0){
 
        e.preventDefault()
        
        display_error.style.display = "block"
        
        for(i = 0 ; i < error.length ; i++ ){

            display_error.innerHTML += error[i] + "<br>"
            

        }
        
    }else{

        alert("Submitted")
        
        
    }
}





// var form_Element = document.getElementById("form")

// form_Element.addEventListener("submit", checkvalidity)


// function checkvalidity(){

//     var error = []
//     var display = document.getElementById("display")
    
//     display.innerHTML = ""
    
//     var first_name = document.getElementsByName("firs_name")
    
//     var last_name = document.getElementsByName("last_name")
    
//     var password = document.getElementsByName("password")
    
//     var first_name_value = first_name[0].value
    
//     var last_name_value = last_name_value[0].value
    
//     var password_value = password[0].value

    
//     if(!first_name_value){

//         error.push("first name is not inserted  ")
        
//     }
    
//     if(!last_name_value){

//         error.push("last name value required")
        
//     }

//     if(!password){

//         error.push("password field empty")
        
//     } else if (password_value.length < 5){

//         error.push("password is not longer than 5 characters")
        
        
//     }
    
//     if(error.length > 0){
//       e.preventDefault()

//         display.style.display = "block"
        
        
//      for(i = 0; i < error.length ; i++){

//       display.innerHTML += error[i] + "<br>"

//      }
        
        
        
        
//     }else{

//         alert("submitted")
//     }
    
    
// }



