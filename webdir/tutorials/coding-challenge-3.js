
/*********************************************
 * Coding Challenge 3
 */

/*
John and his family went on a holiday and went to 3 different resturants. The bills were $123, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less that $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK :)
*/

/**
 * This function will calculate & return the tax for the given currency amount
 * @param {integer} amount 
 * @returns amount 
 */
function tipCalc(amount) {
	var totalTip = 0;
	switch(true) {
		case amount < 50:
			totalTip = amount * (20 / 100);   
			return Math.round(totalTip);
		case amount >= 50 || amount <= 200:
			totalTip = amount * (15 / 100);  
			return Math.round(totalTip);
		case amount > 200:
			totalTip = amount * (10 / 100);  
			return Math.round(totalTip);
		default:
			return console.log('Error: could not calculate amount');
	}
}


/* Varible Decleration */
var bill1 = 123;
var tip1 = tipCalc(bill1);
var totalPayment1 = bill1 + tip1;

/* Output */
console.log("Bill #1: $" + bill1 + " Tip: $" + tip1);

/* Varible Decleration */
var bill2 = 48;
var tip2 = tipCalc(bill2);
var totalPayment2 = bill2 + tip2;

/* Output */
console.log("Bill #2: $" + bill2 + " Tip: $" + tip2);

/* Varible Decleration */
var bill3 = 268;
var tip3 = tipCalc(bill3);
var totalPayment3 = bill3 + tip3;

/* Output */
console.log("Bill #3: $" + bill3 + " Tip: $" + tip3);

/* Varible Decleration */
var allTips = [tip1, tip2, tip3];
var allPayments = [totalPayment1, totalPayment2, totalPayment3];

/* Output */
console.log('All Tips: ' + allTips);
console.log('All Payments: ' + allPayments);



