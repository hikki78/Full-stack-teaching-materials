//Part 4: Complex Data Types in JavaScript
// In JavaScript, complex data types include objects, arrays, and functions. These data types can hold multiple values and can be manipulated in various ways.

//1. Arrays: An array is a collection of values that are ordered and indexed. You can create an array using square brackets [] and access its elements using their index.
//write program to create even and odd number from an array of numbers:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even.");
    } else {
        console.log(numbers[i] + " is odd.");
    }   
}
//write a progream to print the biggest number from an array of numbers:
const number = [1, 2, 3, 4, 5];
let isBiggest = number[0]; // Initialize biggest with the first element of the array
for (let i = 0; i < number.length; i++) {
    if (number[i] > isBiggest) {
        isBiggest = number[i];
    }
}
console.log("The biggest number is: " + isBiggest);

//2. Objects: An object is a collection of key-value pairs. You can create an object using curly braces {} and access its properties using dot notation or bracket notation.
//Write a program that prints all the male peoples' first name given a complex object of peoples:
const people = [
    { firstname: "John", lastname: "Doe", gender: "male" },
    { firstname: "Jane", lastname: "Smith", gender: "female" },
    { firstname: "Bob", lastname: "Johnson", gender: "male" }
];

for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "male") {
        console.log("The males in the group are: " + people[i].firstname);
    } 

}

//HOW CAN I PRINT THE AMLES IN THE GROUPS ARE JOHN & BOB INSTEAD OF PRINTING TWO TIMES THE SAME SENTENCE? WTRIE THE CODE
const peoples = [
    { firstname: "John", lastname: "Doe", gender: "male" },
    { firstname: "Jane", lastname: "Smith", gender: "female" },
    { firstname: "Bob", lastname: "Johnson", gender: "male" }
];

let maleNames = []; // Create an empty array to store the names
for (let i = 0; i < peoples.length; i++) {
    if (people[i].gender === "male") {
        maleNames.push(peoples[i].firstname);// Add the first name to the maleNames array, push is a method that adds an element to the end of an array. In this case, it adds the first name of the male person to the maleNames array. After the loop finishes, the maleNames array will contain the first names of all the male people in the original peoples array.
    }
}
console.log("The males in the group are " + maleNames.join(" & "));// The join method is used to concatenate all the elements of the maleNames array into a single string, with " & " as the separator between the names. This will result in a string like "John & Bob" if both John and Bob are male.




//3. Functions: A function is a block of code that performs a specific task. You can create a function using the function keyword and call it by its name followed by parentheses ().
//Write a program that takes two numbers as input and returns their sum using a function:
function sum(a, b) {
    return a + b; // The return statement is used to specify the value that the function should output when it is called. In this case, it returns the result of adding a and b together.
}

const result = sum(2, 1); // Call the function with arguments 2 and 3, and store the result in the variable 'result'
console.log("The sum of 2 and 1 is: " + result); // Print the result to the console, why + result? Because we want to concatenate the string "The sum of 2 and 3 is: " with the value of result, which is the output of the sum function. The + operator is used for string concatenation in this case, allowing us to combine the static text with the dynamic value of result to create a complete message that can be displayed to the user.

// we could write the above function as a loop too right? yep, lets write the code for that:
function sumLoop(a, b) {
    let total = 0; // Initialize total to 0
    for (let i = a; i <= b; i++) { // Loop from a to b, inclusive
        total += i; // Add the current value of i to total
    }
    return total; // Return the final total after the loop finishes
}

const loopResult = sumLoop(2, 1);
console.log("The sum of numbers from 2 to 3 is: " + loopResult); // This will output "The sum of numbers from 2 to 3 is: 5", because the loop will add 2 and 3 together to get the total.


/*so, when we are making the 2+3 to 2+1 , our code is working on function but not on loop, why? Because in the sumLoop function, we are using a for loop that iterates from a to b. 
If a is greater than b (like in the case of sumLoop(2, 1)), the loop will not execute at all, and the total will remain 0. 
This is because the loop condition (i <= b) is not satisfied from the start, so the loop body is never executed.
In contrast, the sum function simply adds a and b together without any conditions, so it will work regardless of the values of a and b.
And this is why we use functions for specific tasks that can be performed in a single step, while loops are used for tasks that require repetition or iteration over a range of values.
In this case, the sum function is more appropriate for adding two numbers together, while the sumLoop function is designed to calculate the sum of a range of numbers, which is why it behaves differently when given the same inputs.*/ 

// we will learn more about functions in next part.
