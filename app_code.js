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
btn_op_minus.addEventListener('click', function () {operationClicked ('-')}, false);
btn_op_multiply.addEventListener('click', function () {operationClicked ('*')}, false);
btn_op_divide.addEventListener('click', function () {operationClicked ('/')}, false);

btn_op_divide.addEventListener('click', function () {resultClicked ()}, false);


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



function operationPlusClicked () {


}


function operationClicked (val) {


}



function resultClicked () {

}