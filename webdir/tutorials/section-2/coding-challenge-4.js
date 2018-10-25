/**********************************
 * Coding Challenge 4
 */

 /* 
 Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality
 with objects and methods.
 1. For each of them, create an object with properties for their full name, mass, and height
 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
 3. in the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

 Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
 */


 // John object
 john = {
     name: 'John Smith',
     mass: 220, 
     height: 5.10,
     calcBMI: function() {
         this.bmi = this.mass / (this.height * this.height);
     }
 };

 // Calculate John's BMI
 john.calcBMI();

 // Console log john object
 console.log(john);

 // Mark object
 mark = {
     name: 'Mark Jones',
     mass: 310, 
     height: 6.2,
     calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
     }
 };

 mark.calcBMI();
 console.log(mark);



