// Write your JavaScript here

const big_bills = [
    ['fifties-output', 5000],
    ['twenties-output',2000],
    ['tens-output',    1000],
    ['fives-output',    500]
];
const small_change = [
    ['dollars-output',  100],
    ['quarters-output',  25],
    ['dimes-output',     10],
    ['nickels-output',    5],
    ['pennies-output',    1],  
];
const name = 0;  // first element is the ID for the output field
const value = 1; // second element is the value of that bill or coin, in pennies

let change = small_change;  // at start, let us only use dollar bills and not the larger bills
var  enableLargeBills = false; // at start, only use singles. No large bills.

document.getElementById('amount-due').focus();

function calculateChange(paid,due) {
    var change_left = paid*100 - due*100; // change left to be accounted for... in pennies
    change.forEach((a) => {
        document.getElementById(a[name]).innerText = Math.floor(change_left / a[value]);
        change_left = Math.ceil(change_left % a[value]);
    });
}

function handleClickEvent(e) {
    let due = document.getElementById('amount-due').value;
    let paid = document.getElementById('amount-received').value;
    calculateChange(paid,due);
}
  
document.getElementById('calculate-change').onclick = handleClickEvent;

// below is bonus project code to handle optionally using large bills for change.

document.getElementById('enable-large-bills').onclick = ((e)=>{
    if( enableLargeBills ){ // disable the large bills
        enableLargeBills = false;
        // set big bills to zero
        big_bills.forEach((a) => {document.getElementById(a[name]).innerText = 0;});
        change = small_change;
        document.getElementById('enable-large-bills').innerText = 'Click to enable large bills';
    } else { // enable the large bills
        enableLargeBills = true;
        change = big_bills.concat(small_change);
        document.getElementById('enable-large-bills').innerText = 'Click to disable large bills';
    }
    // oh hey, we just changed state let's just go ahead and re-calc the bills and change due
    handleClickEvent(e);
});
