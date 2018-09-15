/*************************************
 * Coding Challenge 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables *completed*
2. Calculate both their BMIs *completed* 
3. Create a boolean variable containing information about whether Mark has a higher BMI than John. *completed* 
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). *completed*
*/

/* Answer */
// John's information
var johnHeight = 6;
var johnMass = 220;

// Mark's information
var markHeight = 5.7;
var markMass = 250;

// Calculating BMI of John & Mark
var bmiJohn = johnMass / (johnHeight * johnHeight);
var bmiMark = markMass / (markHeight * markHeight);

// Boolean Mark's BMI > John's BMI
var markBmiGreater = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? Answer: ' + markBmiGreater); 