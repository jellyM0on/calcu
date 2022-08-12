// individual operation functions

function addNum(a, b) {
    return a + b;
}

function subtractNum(a, b) {
    return a - b;
}

function timesNum(a, b) {
    return a * b;
}

function divideNum(a, b) {
    return a/b;
}

// operate

function operate(operation, num1, num2) {
    switch(operation){
        case "add": 
            alert(addNum(num1,num2));
            break;
        case "sub":
            subtractNum(num1,num2); 
            break;
        case "multi": 
            timesNum(num1,num2); 
            break; 
        case "divi": 
            divideNum(num1,num2); 
            break; 
    }
}

//make grids: 
//1. selectors: 

const featureSection = document.querySelector(".featureSection");
const numberSection = document.querySelector(".numberSection");
const numberSectionUpper = document.querySelector(".numberSectionUpper");
const numberSectionMain = document.querySelector(".numberSectionMain");
const operatorSection = document.querySelector(".operatorSection");
const numContainer = document.querySelector(".numContainer");

//2. functions to make grids

function makeGrids(section, classList, identities, content) {
    const grids = document.createElement("button"); 
    section.appendChild(grids);
    grids.classList.add(classList);
    let gridContent = content[i];
    let gridID = identities[i]; 
    grids.setAttribute("id", `${gridID}`)
    grids.textContent = `${gridContent}`;
};

const operators = ["+", "-", "x", "/", "="];
const operatorID = ["add", "sub", "times", "divi", "equals"]; 
const additionalFeatures = ["C", "+/-", "%"];
const addFeatID = ["clear", "sign", "percent"]; 
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];


function makeOperationGrids() {
    for (i = 0; i <= 4; i++) {
        makeGrids(operatorSection, "opGrids", operatorID, operators);
    }
};

function makeNumGridsUpper() {
    for (i=0; i<=2; i++) {
        makeGrids(numberSectionUpper, "numberGrids", addFeatID, additionalFeatures);
    }
};

function makeNumGridsMain() {
    for (i = 0; i <= 10; i++) {
        makeGrids(numContainer, "mainNumGrids", numbers, numbers); 
    }
    
};

//3. to call all grid functions: 
function makeAllGrids() {
    makeOperationGrids();
    makeNumGridsUpper();
    makeNumGridsMain();
}






//taking input values
// let givenNums = [0]; 
// let takeNums = [];

// let newValue; 
// function inputNum() {
//     const defaultValue = [];
//     const numButtons = document.querySelectorAll(".mainNumGrids"); 

//     numButtons.forEach((button) => 
//     button.addEventListener("click", () => {
//     let displayedNum = button.getAttribute("id"); 
//     defaultValue.push(displayedNum);
//     newValue =  parseInt(defaultValue.join(""));
//     displayValue = newValue;
//     displaySection.textContent = displayValue;
// }));
//     givenNums.push(parseInt(newValue)); 
//     takeNums.push(givenNums[(givenNums.length) - 1]);
// };



// let givenOp; 
// function inputOp() {
//     const opButtons = document.querySelectorAll(".opGrids"); 
//     opButtons.forEach((button) =>
//     button.addEventListener("click", () => { 
//     let opID = button.getAttribute("id"); 
//     givenOp = opID;
//     inputNum(); 

//     }))
// }; 

const calculator = {
    displayValue: "0", 
    firstOp: null, 
    waitingForSecondOp: false, 
    operator: null, 
}

function displayNum() {
    const display = document.querySelector(".display");
    display.value = calculator.displayValue;
}


//function to start calc:
function startCalc() {
    makeAllGrids(); 
    displayNum();
}


//initializer
startCalc();

// const opButton = document.querySelector("#equals"); 
// opButton.addEventListener("click", () => { operate()})


