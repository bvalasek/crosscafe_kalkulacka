// 
// Calculator
// by Jozef Scensny and Brano Valasek
//


// DOM variables
var txt_display = document.getElementById("txt_display");

//var undefinedVal = -1;
//var valueStore = [undefinedVal, undefinedVal];
var value;
var isOperationSelected = false;


btn_val_0.addEventListener('click', function () {numberClicked (0)}, false);
btn_val_1.addEventListener('click', function () {numberClicked (1)}, false);
btn_val_2.addEventListener('click', function () {numberClicked (2)}, false);
btn_val_3.addEventListener('click', function () {numberClicked (3)}, false);
btn_val_4.addEventListener('click', function () {numberClicked (4)}, false);
btn_val_5.addEventListener('click', function () {numberClicked (5)}, false);
btn_val_6.addEventListener('click', function () {numberClicked (6)}, false);
btn_val_7.addEventListener('click', function () {numberClicked (7)}, false);
btn_val_8.addEventListener('click', function () {numberClicked (8)}, false);
btn_val_9.addEventListener('click', function () {numberClicked (9)}, false);

btn_op_plus.addEventListener('click', function () {operationPlusClicked ()}, false);
btn_op_minus.addEventListener('click', function () {operationMinusClicked ()}, false);
btn_op_multiply.addEventListener('click', function () {operationMultiplyClicked ()}, false);
btn_op_divide.addEventListener('click', function () {operationDivideClicked ()}, false);

btn_result.addEventListener('click', function () {resultClicked ()}, false);
btn_clear.addEventListener('click', function () {resultClear ()}, false);


// ----------------------
// Functions 
// ----------------------

function numberClicked ( val ) {

    // if ( isOperationSelected == true ) {
    //     txt_display.innerHTML = '';
    // }
    console.log('numberClicked started with val', val);
    
    var onDisplayNow = txt_display.innerHTML;
    if (onDisplayNow.length == 1 && onDisplayNow == '0') {

        if (val == '0') {
            return;
        }
        else {
            onDisplayNow = val;
        }
    }
    else {
        onDisplayNow = onDisplayNow.concat(val);
    }
    
    txt_display.innerHTML = onDisplayNow;
    
}


//-------------------------------------------



//-------------------------------------------
var previousNumber,//last number is stored
    selectedOperator,//store last selected operator, false if none or if pressed C
    currentNumber;//get new number from html element "txt_display"
function clearDisplay (){
    document.getElementById("txt_display").innerHTML = 0;
}


function operationPlusClicked () {
    previousNumber = txt_display.innerHTML;
    selectedOperator = '+';
    //alert (previousNumber +' and '+ selectedOperator);
    clearDisplay();
}

function operationMinusClicked () {
    previousNumber = txt_display.innerHTML;
    selectedOperator = '-';
    //alert (previousNumber + selectedOperator);
    clearDisplay();
}

function operationMultiplyClicked () {
    previousNumber = txt_display.innerHTML;
    selectedOperator = '*';
    //alert (previousNumber +' and '+ selectedOperator);
    clearDisplay();
}

function operationDivideClicked () {
    previousNumber = txt_display.innerHTML;
    selectedOperator = '/';
    //alert (previousNumber +' and '+ selectedOperator);
    clearDisplay();
}

function resultClicked () {    
    currentNumber = txt_display.innerHTML;
    
    if (selectedOperator == '+'){
        previousNumber = parseInt(previousNumber) + parseInt(currentNumber);
    }
    else if (selectedOperator == '-'){
        previousNumber = parseInt(previousNumber) - parseInt(currentNumber);
    }
    else if (selectedOperator == '*'){
        previousNumber = parseInt(previousNumber) * parseInt(currentNumber);
    }
    else if (selectedOperator == '/'){
        previousNumber = parseInt(previousNumber) / parseInt(currentNumber);
    }
    document.getElementById("txt_display").innerHTML = previousNumber;
}

function resultClear(){
    clearDisplay();
}

