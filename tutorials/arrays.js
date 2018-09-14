/*********************************************
 * Arrays
 */
 
 // Initialize new array
 var names = ['John','Mark','Jane'];
 var years = new Array(1990, 1969, 1948);
 
 console.log(names[2]);
 console.log(names.length);
 
 // Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);
 
 // Different data types
 var john = ['John', 'Smith', 1990, 'teacher', false];
 
 john.push('blue');		// adds data element to the end of an array
 john.unshift('Mr.');   // adds data element to the beginning of an array
 console.log(john);		// output john array
 
 john.pop();			// delete data element from the end of an array
 john.shift();			// delete data element from the beginning of an array
 console.log(john);		// output john array
 
 console.log(john.indexOf(23));	//output index of a value

 // assign the array as a variable
 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
 console.log(isDesigner);
 