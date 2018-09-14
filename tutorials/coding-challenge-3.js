/*********************************************
 * Coding Challenge 3
 */

/*
John and his family went on a holiday and went to 3 different resturants. The bills were $123, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less that $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK :)
*/

function tipCalc(amount) {
	var totalTip = 0;
    console.log('amount: ' + amount);
    
	if (amount >= 50 || amount <= 200){
		console.log('condition is true');
	} else {
		console.log('condition is false');
    }
    
	switch(amount) {
		case 'amount < 50':
			totalTip = (amount * 20) / 100;   
			return totalTip;
		case 'amount >= 50 || amount <= 200':
			totalTip = (amount * 15) / 100;  
			return totalTip;
		case 'amount > 200':
			totalTip = (amount * 10) / 100;  
			return totalTip;
		default:
			return console.log('Error: could not calculate amount');
    }
}

//var bill = [123, 48, 268];
var bill = 123;
var totalBill = tipCalc(bill);
console.log("bill: " + bill);