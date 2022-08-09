

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

let operators = document.querySelectorAll('.operator');
let displayValue = [];
let wantedOperators = [];
let equalBtn = document.querySelector('#equal');
let clearBtn = document.querySelector('#clear');
let effaceEnAppuyantSurBtnOperateur = 0;
let operateurUnique = 0

let digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click',(e) => {
    if(effaceEnAppuyantSurBtnOperateur == 1){
        effaceEnAppuyantSurBtnOperateur = 0;
        clearDisplay();
    }
    populateDisplay(digit.textContent);
    operateurUnique = 0;

} ))


operators.forEach(operator => operator.addEventListener('click',(e) => {
   
    if(operateurUnique == 0){
        
        displayValue.push(Number(displayContainer.textContent));
        wantedOperators.push(operator.id);
        effaceEnAppuyantSurBtnOperateur ++;
        operateurUnique++;
    }else if(operateurUnique == 1){
        wantedOperators[wantedOperators.length-1]= operator.id;
    }
    

}))



equalBtn.addEventListener('click', () => {
    displayValue.push(Number(displayContainer.textContent));
    clearDisplay();
    let resultat = 0;
    for(let i = 0; i < wantedOperators.length; i++){
        if(i==0){
            resultat = operate(wantedOperators[i],displayValue[i],displayValue[i+1])
        }else{
            resultat = operate(wantedOperators[i],resultat,displayValue[i+1])
        }
        
    }

    populateDisplay(resultat);
    displayValue = [];
    wantedOperators = [];

})

clearBtn.addEventListener('click',(e) => {
    clearDisplay();
    displayValue = [];
    wantedOperators = [];
})
