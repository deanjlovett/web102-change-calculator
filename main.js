// Write your JavaScript here

const name = 0;
const value = 1;
var change = [
    ['fifties-output', 5000],
    ['twenties-output',2000],
    ['tens-output',    1000],
    ['fives-output',    500],
    ['dollars-output',  100],
    ['quarters-output',  25],
    ['dimes-output',     10],
    ['nickels-output',    5]
//    ['pennies',    1]  
];
var  enableLargeBills = false;
const largeBillThreshold = 100;

function calculateChange(paid,due) {
    console.log("calculateChange( paid: <" + paid + ">, due: <" + due + "> )");
    console.log("==============");   
    var change_left = paid*100 - due*100;
    console.log("change_left:  " + change_left);
    var change_fifties = 0;
    var change_twenties = 0;
    var change_tens = 0;
    var change_fives = 0;
    var change_dollars = 0;
    var change_quarters = 0;
    var change_dimes = 0;
    var change_nickels = 0;
    var change_pennies = 0;

    console.log("==============");
    console.log("change_fiftie:  " + change_fifties);
    console.log("change_twenties:  " + change_twenties);
    console.log("change_tens:  " + change_tens);
    console.log("change_fives:  " + change_fives);
    console.log("change_dollars:  " + change_dollars);

    console.log("change_quarters: " + change_quarters);
    console.log("change_dimes:    " + change_dimes);
    console.log("change_nickels:  " + change_nickels);
    console.log("change_pennies:  " + change_pennies); 
/*
    var change_left_save = change_left;

    change.some((a) => {
        console.log('=============');
        console.log('loop: a[ name:' + name + ']=' + a[name]);
        console.log('loop: a[value:' + value + ']=' + a[value]);
        console.log('loop: change_left = ' + change_left);
        console.log('loop: Math.floor(change_left / a[value]) = ' + Math.floor(change_left / a[value]));

        if( !(enableLargeBills && (a[value] > largeBillThreshold )) ) {
            console.log('loop: skipping  ' + a[name] );
            document.getElementById(a[name]).innerText = 0;
        } else {
            console.log('loop: old value = ' + document.getElementById(a[name]).innerText );
            document.getElementById(a[name]).innerText = Math.floor(change_left / a[value]);
            console.log('loop: new value = ' + document.getElementById(a[name]).innerText );

            change_left %= a[value];
            console.log('loop: change_left %= a[value]; ');
            console.log('loop: change_left = ' + change_left);
        }
    });

    change_left = change_left_save;
*/    
    //    change_left -= (change_fitties = Math.floor(change_left / 5000))*5000;
    if( !(enableLargeBills) ) {
        console.log('loop: skipping  ' + 'fitties' );
        document.getElementById('fifties-output').innerText = 0;
    } else {
        change_fifties = Math.floor(change_left / 5000);
        change_left %= 5000;
        console.log("==============");
        console.log("change_left:     " + change_left);
        console.log("change_fifties:  " + change_fifties);
    }

    //    change_left -= (change_twenties = Math.floor(change_left / 2000))*2000;
    if( !(enableLargeBills) ) {
        console.log('loop: skipping  ' + 'twenties' );
        document.getElementById('twenties-output').innerText = 0;
    } else {
        change_twenties = Math.floor(change_left / 2000);
        change_left %= 2000;

        console.log("==============");
        console.log("change_left:     " + change_left);
        console.log("change_twenties:  " + change_twenties);
    }
    //    change_left -= (change_tens = Math.floor(change_left / 1000))*1000;
    if( !(enableLargeBills) ) {
        console.log('loop: skipping  ' + 'tens' );
        document.getElementById('tens-output').innerText = 0;
    } else {
        change_tens = Math.floor(change_left / 1000);
        change_left %= 1000;

        console.log("==============");
        console.log("change_left:     " + change_left);
        console.log("change_tens:  " + change_tens);
    }
    //    change_left -= (change_fives = Math.floor(change_left / 500))*500;
    if( !(enableLargeBills) ) {
        console.log('loop: skipping  ' + 'fives' );
        document.getElementById('fives-output').innerText = 0;
    } else {
        change_fives = Math.floor(change_left / 500);
        change_left %= 500;

        console.log("==============");
        console.log("change_left:     " + change_left);
        console.log("change_fives:  " + change_fives);
    }
    //    change_left -= (change_dollars = Math.floor(change_left / 100))*100;
    change_dollars = Math.floor(change_left / 100);
    change_left %= 100;

    console.log("==============");
    console.log("change_left:     " + change_left);
    console.log("change_dollars:  " + change_dollars);
   
//    change_left -= (change_quarters = Math.floor(change_left / 25))*25;
    change_quarters = Math.floor(change_left / 25);
    change_left %= 25;
    console.log("==============");
    console.log("change_left:     " + change_left);
    console.log("change_quarters: " + change_quarters);

//    change_left -= (change_dimes = Math.floor(change_left / 10))*10;
    change_dimes = Math.floor(change_left / 10);
    change_left %= 10;
    console.log("==============");
    console.log("change_left:     " + change_left);
    console.log("change_dimes:    " + change_dimes);

//    change_left -= (change_nickels = Math.floor(change_left / 5))*5;
    change_nickels = Math.floor(change_left / 5);
    change_left %= 5;
    console.log("==============");
    console.log("change_left:     " + change_left);
    console.log("change_nickels:  " + change_nickels);

    change_pennies = Math.ceil(change_left);
    console.log("==============");
    console.log("change_left:     " + change_left);
    console.log("change_pennies:  " + change_pennies); 



    document.getElementById('fifties-output').innerText = change_fifties;
    document.getElementById('twenties-output').innerText = change_twenties;
    document.getElementById('tens-output').innerText = change_tens;
    document.getElementById('fives-output').innerText = change_fives;

    document.getElementById('dollars-output').innerText = change_dollars;

    document.getElementById('quarters-output').innerText = change_quarters;
    document.getElementById('dimes-output').innerText = change_dimes;
    document.getElementById('nickels-output').innerText = change_nickels;
    document.getElementById('pennies-output').innerText = change_pennies;
    /* */
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

}

document.getElementById('enable-large-bills').onclick = handleClickEventLargeBillToggle;
