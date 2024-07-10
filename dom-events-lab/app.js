let num1 = "";
let num2 ='';
let operator = "";
let result = 0;

//dom elements cache

const numberBtnEl = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const displayEl = document.querySelector('.display');


//functions

const render = () => {
    displayEl.textContent = result;
    };

const updateResult = (value) => {
    //result1 = num1;
    result = value;
    render()
}
const updateNumber = (event) => {
    console.log(event.target.textContent);

    if (num1 && operator){

        console.log('updating num2', event.target.textContent)
        if (!num2) {
            num2 = event.target.textContent;
        } else {
            num2 += event.target.textContent;
        }

        updateResult(num2)
    } else {
        //
        if (!num1) {
            num1 = event.target.textContent;
        } else {
            num1 += event.target.textContent;
        }
        

        updateResult(num1)
}
// to take the current (num1) -> update result
};


const resetCalc = () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
    render();
};


const updateOperator = (event) => {
    let key = event.target.textContent;
    if (key ==='C') {
        resetCalc();
    } else {
        console.log('operator', key);
        operator = key;
    }
};

// event handler
const handleCalculate = () => {
    console.log(`${num1} ${operator} ${num2}`)
    if (operator === "+") {
        updateResult(Number(num1) + Number(num2));
    } else if (operator === "-") {
        updateResult(Number(num1) - Number(num2));
    } else if (operator === "*") {
        updateResult(Number(num1) * Number(num2));
    } else if (operator === "/") {
        updateResult(Number(num1) / Number(num2));
    }
    num1 = '';
    numm = '';
    operator = '';
};

const handleEquals = () => {
    if (num1 && operator && num2) {
        let calculatedResult;
        switch (operator) {
            case "+":
                calculatedResult = Number(num1) + Number(num2);
                break;
            case "-":
                calculatedResult = Number(num1) - Number(num2);
                break;
            case "*":
                calculatedResult = Number(num1) * Number(num2);
                break;
            case "/":
                calculatedResult = Number(num1) / Number(num2);
                break;
            default:
                return;
        }
        updateResult(calculatedResult);
        num1 = calculatedResult.toString();
        num2 = '';
        operator = '';
    }
};
//click handler for each group of elements


equalBtnEl.addEventListener('click', handleEquals)
// functionality will be tied to its button

numberBtnEl.forEach((numberBtnEl) => {
    numberBtnEl.addEventListener('click', updateNumber);
});

operatorBtnEls.forEach((opEl) => {
    opEl.addEventListener('click',updateOperator)
});
    
render();


