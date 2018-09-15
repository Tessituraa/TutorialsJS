/*************************************
 * Operator precedence
 */
 
var now = 2018;
var yearJason = 1996;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJason >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJason = now - yearJason;
var ageMark = 35;
var average = (ageJason + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++; 