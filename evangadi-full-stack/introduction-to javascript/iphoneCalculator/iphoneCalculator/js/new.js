// // 1. Select all necessary elements (buttons, display, etc.) from the DOM


// // prepare an array of all number buttons to add event listener to all of them.



// // 2. Initialize variables to store values and operators
// let valueNumInMemory = null
// let operatorInMemory = null

// // 3. Create functions to handle:
// //    a. Number button clicks
// //    b. Operator button clicks
// //    c. Special buttons (AC, PM, %, etc.)
// //    d. Updating the display

// // functions

// // prepare a function to handle number click

// const getvalueAsStr = () => {
//     const currentValueStr = valueEl.textContent
//     return currentValueStr.split(".").join("")
// }

// // var getvalueAsStrr = () => valueEl.textContent.split(".").join("") // same as the above one
    
// // now to make the string number treated as a number and to enable it accept the commas when more than 4 digits

// const getValueAsNum = () =>{
//     return parseFloat(getvalueAsStr()) // this will change the string number to actual real number
// }

// const setStrAsValue = (valueStr) => {
//     const [wholeNumStr, decimalStr] = valueStr.split(".")    

//     if(decimalStr){
//         valueEl.textContent = 
//         parseFloat(wholeNumStr).toLocaleString()+"." + decimalStr
//     }else{
//         valueEl.textContent = parseFloat(valueStr).toLocaleString()
//     }
//     if(valueStr[valueStr.length - 1] === "."){
//         valueEl.textContent += "."
//     }
// }

// const handleNumberClick = (numstr) =>{
//     console.log(numstr);

//     const currentValueStr = getvalueAsStr()
//     if(currentValueStr === "0"){
//         setStrAsValue(numstr)
//     }else{
//         setStrAsValue(currentValueStr + numstr)
//     }
// }

// // 4. Add event listeners to all buttons to call the appropriate functions

// // fo loop to add event listener to all number buttons
// for(let i =0; i > numberElArray.length ; i++ ){
//     const numberEL = numberElArray[i];
//     numberEL.addEventListener("click", () =>{
//           handleNumberClick(i.toString());        
//     })
// }

// // 5. Implement the logic for each function to update the display and perform calculations

// // ...existing code...



`

1. Log the outer height of the window to the console.

2. Select necessary elements from the DOM:
   - hourEl: element with class 'hour'
   - minuteEl: element with class 'minute'
   - valueEl: element with class 'value'
   - acEl: element with class 'ac'
   - pmEl: element with class 'pm'
   - percentEl: element with class 'percent'
   - additionEl: element with class 'addition'
   - subtractionEl: element with class 'subtraction'
   - multiplicationEl: element with class 'multiplication'
   - divisionEl: element with class 'division'
   - equalEl: element with class 'equal'
   - decimalEl: element with class 'decimal'
   - number0EL to number9EL: elements with classes 'number-0' to 'number-9'

${const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0EL = document.querySelector('.number-0');
const number1EL = document.querySelector('.number-1');
const number2EL = document.querySelector('.number-2');
const number3EL = document.querySelector('.number-3');
const number4EL = document.querySelector('.number-4');
const number5EL = document.querySelector('.number-5');
const number6EL = document.querySelector('.number-6');
const number7EL = document.querySelector('.number-7');
const number8EL = document.querySelector('.number-8');
const number9EL = document.querySelector('.number-9');

3. Prepare an array of all number buttons.
${

    let numberElArray = [
        number0EL, number1EL, number2EL, number3EL, number4EL, number5EL, number6EL, number7EL, number8EL, number9EL
    ]
}
4. Initialize variables to store values and operators:
   - valueStrInMemory: null
   - operatorInMemory: null
${

    let valueStrInMemory = null

    let operatorInMemory = null

}
5. Create functions to handle:
   a. Number button clicks:
      - getvalueAsStr: Get the current value as a string without commas.
      - getValueAsNum: Convert the current value string to a number.
      - setStrAsValue: Set the display value as a formatted string.
      - handleNumberClick: Handle number button clicks and update the display.
${

    const getvalueAsStr = () => {

        const currentValueStr = valueEl.textContent;
        return currentValueStr.split(",").join("")
    }

    const getValueAsNum = () => {
        return parseFloat(getvalueAsStr())
    }


    const setStrAsValue = (valueStr) => {
        const [wholeNumStr, decimalStr] = valueStr.split(".")

        if(decimalEl){
            valueEl.textContent = 
            parseFloat(wholeNumStr).toLocaleString + "." + decimalEl
        }else{

           valueEl.textContent = parseFloat(valueStr).toLocaleString()
            
        }
        // if valuestring lenght -1 all argument accepts the dot sign or in other word if the number is decimal
        // make textcontent of orignal valueEl accept dot sign to make them run with chain approach
        if(valueStr[valueStr.length - 1] === "." ){

           valueEl.textContent === "." 
            
        }
        
    }

    
    const  handleNumberClick = (numstr) => {

        // make the function accept argument numstr
        // if the currentvaluestr is 0 
        // make the function setStrAsValue accept argument numstr and change value of zero to the clicked number also make the buttons clicke be treated as real numbers that accepts commas, dotes and decimal
        // else if not zero or number is already written append the currentValueStr with numstr inside setStrAsValue to which will enable it to accept more numbers afte typing a single number
        if(currentValueStr === "0"){
            setStrAsValue(numstr)
            
            
        }else{
            setStrAsValue(currentValue + numstr ) 
        }
    }
    
    
}
   b. Operator button clicks:
      - getResultofOperationAsStr: Get the result of the operation as a string.
      - handleOperatorClick: Handle operator button clicks and update the display.
      ${

        const getResultofOperationAsStr

      }
   c. Special buttons (AC, PM, %, etc.):
      - Add event listeners to the AC, PM, and percent buttons to handle their respective functionalities.
      ${}
   d. Updating the display:
      - updateTime: Update the time display every second.
${}
6. Add event listeners to all buttons to call the appropriate functions:
   - Add event listeners to the operator buttons (addition, subtraction, multiplication, division).
   - Add event listener to the equal button to calculate and display the result.
   - Add event listeners to the number buttons and decimal button to handle clicks.
${}
7. Update the time display every second using setInterval.`


${}





















