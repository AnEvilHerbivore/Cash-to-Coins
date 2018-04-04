let dollarAmount = 0.15 * 100;
const piggyBank = {quarters:0, dimes:0, nickels:0, pennies:0}

do {
    if (dollarAmount >= 25) {
        dollarAmount -= 25;
        piggyBank.quarters += 1;
    } else if(dollarAmount >= 10) {
        dollarAmount -= 10;
        piggyBank.dimes += 1;
    } else if(dollarAmount >= 05) {
        dollarAmount -= 05;
        piggyBank.nickels += 1;
    } else {
        dollarAmount -= 01;
        piggyBank.pennies += 1;
    }
} while (dollarAmount > 0);


// Your magic code here

console.log(piggyBank);