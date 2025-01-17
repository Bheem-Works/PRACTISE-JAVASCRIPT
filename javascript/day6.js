// objects by simple dev 
const s = [1,2,3];
console.log(s[0]);
s[1]=22;
console.log(s);

// this will tell how much value does my arrays have 
console.log(s.length); 

// .push() this adds a value to the end of the arrays
s.push(100);
console.log(s);

// .splice() this remove the value from the arrays
s.splice(0, 2);
console.log(s);

// pop() it only gives the only one values 
s.pop();
console.log(s);

// unshift();
s.unshift(2);
console.log(s);

// s.shift();
s.shift();
console.log(s);

// Define an array
// let fruits = ["apple", "banana", "mango", "orange"]; // This is an array of strings

// // Add an element to the end of the array
// fruits.push("pineapple"); // Using the push() method
// console.log(fruits); // Output: ["apple", "banana", "mango", "orange", "pineapple"]

// // Remove the last element from the array
// fruits.pop(); // Removes "pineapple"
// console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

// // Add an element to the beginning of the array
// fruits.unshift("mango"); // Adds "grape" at the start
// console.log(fruits); // Output: ["grape", "apple", "banana", "mango", "orange"]

// // Remove the first element from the array
// fruits.shift(); // Removes "grape"
// console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

// // Find the index of a specific element
// let index = fruits.indexOf("banana"); // Using indexOf() method
// console.log(index); // Output: 1

// // Check if the array includes a specific element
// console.log(fruits.includes("mango")); // Output: true
// console.log(fruits.includes("pear"));  // Output: false

// // Filter elements starting with "m"
// let filtered = fruits.filter(fruit => fruit.startsWith("m")); // Using filter()
// console.log(filtered); // Output: ["mango"]



// // loops in arrays by bro code  

// let fall = ["apple","mango","litchi","pineapple","coconut"]

// // for(let i=fall.length-1; i >=0 ; i--) {
// //     console.log(fall[i]);
// // }
// // sort is the shortcuts to show the arrays value at once in column 
// // sort.reverse is the shortcuts to reverse the value of the objects 

// fall.sort().reverse();
// console.log(fall);


