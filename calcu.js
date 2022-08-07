// operations 

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

// make number grids 

const numberSection = document.querySelector(".numberSection");

function makeOperationGrids() {
    for (i = 1; i <= 5; i++) {
        const operationGrids = document.createElement("div"); 
        numberSection.appendChild(numberGrids);
        numberGrids.classList.add("numberGrids");
        numberGrids.setAttribute("id", `${i}`)
        numberGrids.textContent = `${i}`;
    }
}

function makeNumberGrids() {
    //make array with operations
    for (i = 1; i <= 9; i++) {
        const numberGrids = document.createElement("div"); 
        numberSection.appendChild(numberGrids);
        numberGrids.classList.add("numberGrids");
        numberGrids.setAttribute("id", `${i}`)
        numberGrids.textContent = `${i}`;
    }
}

makeOperationGrids();
makeNumberGrids();







//operate();
