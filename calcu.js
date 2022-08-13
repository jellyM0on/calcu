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
            return addNum(num1, num2); 
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
    operator: null
}

function displayNum() {
    const display = document.querySelector(".display");
    if (calculator.displayValue == "Infinity") {
        display.value = "¯\\_(ツ)_/¯"; 
    } else {
    display.value = calculator.displayValue;
    }
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

function inputPercent() {
    calculator.displayValue = calculator.displayValue/100; 
}

function changeSign() {
    if (calculator.displayValue > 0) {
        calculator.displayValue = -calculator.displayValue;
    } else {
        calculator.displayValue *= -1;
    }
}

function handleOp(nextOp) {
    const { firstOp, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue); 
    if (operator && calculator.waitingForSecondOp) {
       calculator.operator = nextOp;
       return;
    } if (firstOp === null && !isNaN(inputValue)) {
        calculator.firstOp = inputValue; 
    } else if (operator) {
        const result = operate(firstOp, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(5))}`; 
        calculator.firstOp = result; 
    }
    calculator.waitingForSecondOp = true; 
    calculator.operator = nextOp; 
    console.log(calculator);
}

function resetCalc() {
     calculator.displayValue = "0";
     calculator.firstOp = null;
     calculator.operator = null;
    calculator.waitingForSecondOp = false;
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
        if (target.id == "clear") {
            resetCalc();
            displayNum();
            return;
        }
        if (target.id == "percent") {
            inputPercent(); 
            displayNum();
            return;
        }
        if (target.id == "sign") {
            changeSign();
            displayNum();
            return;
        }
        inputNum(target.id);
        displayNum(); 
        });
}); 

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 8) {
        console.log("..");
        if (calculator.displayValue < 10 ) {
            calculator.displayValue = "0"; 
            displayNum();
        } else {
        let arrayNum = String(calculator.displayValue).split("");
        let newArray = arrayNum.slice(0, arrayNum.length-1)
        const stringNum = newArray.join(""); 
        calculator.displayValue = `${stringNum}`;
        calculator.firstOp = `${stringNum}`;
        displayNum();
        }
    };
    switch (event.keyCode) {
        case (48): 
            keyFunctions(0);
            break;
        case (49):
            keyFunctions(1);
            break;
        case (50):
            keyFunctions(2);
            break;    
        case (51):
            keyFunctions(3);
            break;
        case (52):
            keyFunctions(4);
            break;
        case (53):
            keyFunctions(5);
            break;
        case (54):
            keyFunctions(6);
            break;
        case (55):
            keyFunctions(7);
            break;
        case (56):
            keyFunctions(8);
            break;
        case (57):
            keyFunctions(9);
            break;
      };
});

function keyFunctions(num) {
    inputNum(String(num));
    displayNum();
}




