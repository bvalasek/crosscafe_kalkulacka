// 
// Calculator
// by Jozef Scensny and Brano Valasek
//


// DOM variables
var txtWelcome = document.getElementById("txtWelcome")
,   btnNewGame = document.getElementById("btnNewGame")
,   btnHit = document.getElementById("btnHit")
,   btnStay = document.getElementById("btnStay")
,   pPlayerBase = document.getElementById("playerBase")
,   pDealerBase = document.getElementById("dealerBase")
,   pNotificationBar = document.getElementById("notificationBar")

//var undefinedVal = -1;
//var valueStore = [undefinedVal, undefinedVal];
var value;
var isOperationSelected = false;


btn_val_0.addEventListener('click', numberClicked (0));
btn_val_1.addEventListener('click', numberClicked (1));
btn_val_2.addEventListener('click', numberClicked (2));
btn_val_3.addEventListener('click', numberClicked (3));
btn_val_4.addEventListener('click', numberClicked (4));
btn_val_5.addEventListener('click', numberClicked (5));
btn_val_6.addEventListener('click', numberClicked (6));
btn_val_7.addEventListener('click', numberClicked (7));
btn_val_8.addEventListener('click', numberClicked (8));
btn_val_9.addEventListener('click', numberClicked (9));

btn_op_plus.addEventListener('click', operationClicked ('+'));
btn_op_minus.addEventListener('click', operationClicked ('-'));
btn_op_multiply.addEventListener('click', operationClicked ('*'));
btn_op_divide.addEventListener('click', operationClicked ('/'));

btn_op_divide.addEventListener('click', resultClicked ());


// ----------------------
// Functions 
// ----------------------

function numberClicked ( val ) {

    if ( !isOperationSelected) {
        value = val;
    }
    else {
        
    }
    
}


