

function add(a,b){

    return a+b

}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}


function divide(a,b){
    return a/b
}

function operate(operator,n1,n2){
    return operator(n1,n2);
}


function populateDisplay(string){

    let displayContainer = document.querySelector('#displayContainer');
    
    displayContainer.textContent += string;

}

