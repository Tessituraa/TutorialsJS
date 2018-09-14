/*************************************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
}else{
  console.log(firstName + ' is not married!');
}

var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
}else{
  console.log(firstName + ' is not married!');
}

// John's information
var johnHeight = 6; //lb
var johnMass = 220; //ft

// Mark's information
var markHeight = 5.7; //lb
var markMass = 250;   //ft

// Calculating BMI of John & Mark
var bmiJohn = johnMass / (johnHeight * johnHeight);
var bmiMark = markMass / (markHeight * markHeight);

// Boolean Mark's BMI > John's BMI
if (bmiJohn > bmiMark) {
  console.log('Mark\'s BMI is higher than John\'s.');
}else{
  console.log('John\'s BMI is higher than Mark\'s.');
} 