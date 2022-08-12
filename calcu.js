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

function operate(num1, num2, operation) {
    switch(operation){
        case "add": 
            return addNum(num1 + num2); 
        case "sub":
            return subtractNum(num1,num2); 
        case "times": 
            return timesNum(num1,num2); 
        case "divi": 
            return divideNum(num1,num2); 
    }
    return num2;
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

//

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

function inputNum(num) {
    const { displayValue, waitingForSecondOp } = calculator; 
    if (waitingForSecondOp === true) {
        calculator.displayValue = num; 
        calculator.waitingForSecondOp = false; 
    } else {
    calculator.displayValue = displayValue === "0" ? num : displayValue + num;
    }
}

function inputDec(point) {
    if (!calculator.displayValue.includes(point)) {
        calculator.displayValue += point;
    }
}

function handleOp(nextOp) {
    const { firstOp, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue); 
    if (firstOp == null && !isNaN(inputValue)) {
        calculator.firstOp = inputValue; 
    } else if (operator) {
        const result = operate(firstOp, inputValue, operator);
        calculator.displayValue = String(result); 
        calculator.firstOp = result; 
    }
    calculator.waitingForSecondOp = true; 
    calculator.operator = nextOp; 
    console.log(calculator);
}

//function to start calc:
function startCalc() {
    makeAllGrids(); 
}

//initializer
startCalc();
 
const numButtons = document.querySelectorAll("button");
numButtons.forEach((button) => { 
    button.addEventListener("click", (event) => {
    const { target } = event; 
    if (target.id == ".") {
        inputDec(target.id); 
        displayNum(); 
        return; 
    }
    if (target.classList.contains("opGrids")) {
        handleOp(target.id); 
        displayNum(); 
        return;
    }
    inputNum(target.id);
    displayNum(); 
    })
}); 

// const opButtons = document.querySelectorAll(".opGrids");
// opButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//     const { target } = event; 
//     handleOp(target.id); 
//     displayNum(); 
//     })
// });


// const opButton = document.querySelector("#equals"); 
// opButton.addEventListener("click", () => { operate()})


