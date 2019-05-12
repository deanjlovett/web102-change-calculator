// Write your JavaScript here

const change = [
    ['fifties-output', 5000],
    ['twenties-output',2000],
    ['tens-output',    1000],
    ['fives-output',    500],
    ['dollars-output',  100],
    ['quarters-output',  25],
    ['dimes-output',     10],
    ['nickels-output',    5],
    ['pennies-output',    1],  
];
const name = 0;  // first element is the ID for the output field
const value = 1; // second element is the value of that bill or coin, in pennies
const largeBillThreshold = 100;
var  enableLargeBills = false;

function calculateChange(paid,due) {
    var change_left = paid*100 - due*100; // change left to be accounted for... in pennies

    change.forEach((a) => {
        if( (!enableLargeBills && (a[value] > largeBillThreshold )) ) {
            document.getElementById(a[name]).innerText = 0;
        } else {
            document.getElementById(a[name]).innerText = Math.floor(change_left / a[value]);
            change_left = Math.ceil(change_left % a[value]);
        }
    });
}

function handleClickEvent(e) {
    let due = document.getElementById('amount-due').value;
    let paid = document.getElementById('amount-received').value;
    calculateChange(paid,due);
}
  
document.getElementById('calculate-change').onclick = handleClickEvent;

function handleClickEventLargeBillToggle(e){
    if( enableLargeBills ){
        enableLargeBills = false;
        document.getElementById('enable-large-bills').innerText = 'Click to enable large bills';
    } else {
        enableLargeBills = true;
        document.getElementById('enable-large-bills').innerText = 'Click to disable large bills';
    }
    handleClickEvent(e);
}

document.getElementById('enable-large-bills').onclick = handleClickEventLargeBillToggle;
