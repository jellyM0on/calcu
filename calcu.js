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

function operate() {
    const operation = prompt("Operator: ");
    const num1 = parseInt(prompt("a: "));
    const num2 = parseInt(prompt("b: "));

    switch(operation){
        case "+": 
            alert(addNum(num1,num2));
        case "-":
            subtractNum(num1,num2); 
        case "x": 
            timesNum(num1,num2); 
        case "/": 
            divideNum(num1,num2); 
            break; 
        default: 
            alert("Enter valid operator"); 
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

function makeGrids(section, classList, identities) {
    const grids = document.createElement("div"); 
    section.appendChild(grids);
    grids.classList.add(classList);
    let idContent = identities[i];
    grids.setAttribute("id", `${idContent}`)
    grids.textContent = `${idContent}`;
};

const operators = ["+", "-", "/", "x", "="];
const additionalFeatures = ["C", "+/-", "%"];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];


function makeOperationGrids() {
    for (i = 0; i <= 4; i++) {
        makeGrids(operatorSection, "numberGrids", operators);
    }
};

function makeNumGridsUpper() {
    for (i=0; i<=2; i++) {
        makeGrids(numberSectionUpper, "numberGrids", additionalFeatures);
    }
};

function makeNumGridsMain() {
    for (i = 0; i <= 10; i++) {
        makeGrids(numContainer, "test", numbers); 
    }
};

//3. to call all grid functions: 
function makeAllGrids() {
    makeOperationGrids();
    makeNumGridsUpper();
    makeNumGridsMain();
}

//function to start calc:
function startCalc() {
    makeAllGrids(); 
}


//initializer
startCalc();

