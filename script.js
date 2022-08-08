

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

let operatorsFunction = [add,subtract,multiply,divide];


function operate(wantedOperator,n1,n2){
   let chooseOperator = operatorsFunction.filter(operator => {
    if(operator.name == wantedOperator){
        return true;
    }else{
        return false;
    }
   })
   return chooseOperator[0](n1,n2);
  }


let displayContainer = document.querySelector('#displayContainer');

function populateDisplay(string){
    
    displayContainer.textContent += string;

}

function clearDisplay(){
    displayContainer.textContent = '';

}


let digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click',(e) =>{
    populateDisplay(digit.textContent);
}))

let operators = document.querySelectorAll('.operator');

operators.forEach(operator => operator.addEventListener('click',(e) => {
    

