/***********************
 * Coding Challenge 5
 */

/* 

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different resturants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200. 

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create
    1) a new array containing all tips
    2) An array containing final paid amounts (bill + tip). 
        HINT: Start with two empty arrays [] as properties and then fill them up in the loop. 

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different resturants. The bills were 
$77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 

HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After 
you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)

7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK :)

*/

// new object john
john = {
    fullName: 'John Smith',                                     // create fullname object
    bills: [124, 48, 268, 180, 42],                             // create and array of the bills
    calcTips: function() {                                      // create a function to calculate the bills that are in the bills array
        this.tips = [];                                         // set this.tips object is an empty array to store tips
        this.finalValues = [];                                  // set this.finalValues is an empty array to store the final values

        for (var i = 0; i < this.bills.length; i++) {           // create a for loop to loop through each bill in the bills array
            // Determine percentage based on tipping rules
            var percentage;                                     // declare percentage as a variable
            var bill = this.bills[i];                           // declare bill as the this.bills[i] object to reduce redundancy

            if (bill < 50) {                                    // check if the bill is more than $50
                precentage = .2;
            } else if (bill >= 50 && bill < 200) {              // check if the bill is between $50 and $200
                percentage = .15; 
            } else {
                percentage = .1;                                // if other checks failed than the bill is more than $200
            }
            // Add result to the corresponding arrays
            this.tips[i] = bill * percentage;                   // calculate the bill times the percentage and store it in the empty tips array
            this.finalValues[i] = bill + bill * percentage;     // calculate all bills and multiply it by the percentage 
        }
    }
}

//john.calcTips();
//console.log(john);

mark = {
    fullName: 'Mark Miller', 
    bills: [77, 475, 110, 45],
    calcTips: function() {                                      
        this.tips = [];                                         
        this.finalValues = [];                                  

        for (var i = 0; i < this.bills.length; i++) {           

            // Determine percentage based on tipping rules
            var percentage;                                     
            var bill = this.bills[i];                          

            if (bill < 100) {                                    
                precentage = .20;
            } else if (bill >= 100 && bill < 200) {              
                percentage = .1; 
            } else {
                percentage = .25;                               
            }

            // Add result to the corresponding arrays
            this.tips[i] = bill * percentage;                   
            this.finalValues[i] = bill + bill * percentage;     
        }
    },
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();
// console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
// console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}