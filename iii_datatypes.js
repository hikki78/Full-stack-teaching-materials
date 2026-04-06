// Part 3:DATA TYPES IN JAVASCRIPT

// JavaScript has several data types, including:
// 1. Primitive Data Types: These include string, number, boolean, null, undefined, and symbol.
// 2. Object Data Types: These include objects, arrays, and functions.

let firstname = "lmao"; // string
let age = 25; // number
let isStudent = false; // boolean
console.log("this person's name is " + firstname + " and his age is " + age + " and is he a student? " + isStudent);

// if else statement:

if (isStudent == true) {
    console.log(firstname + " is a student.");
} else {
    console.log(firstname + " is not a student.");
}


// loops:
//write a program that counts from 0 to 1000 and prints 
let answer = 0;
for (let i=0 ; i <= 1000; i++) { //i++ is a shorthand for i = i + 1, which increments the value of i by 1 in each iteration of the loop. It is a common way to write a loop that counts up by 1.
    answer = answer + i;
}// this loop will iterate from 0 to 1000, and in each iteration, it will add the current value of i to the variable answer. After the loop finishes, answer will contain the sum of all numbers from 0 to 1000.
console.log(answer);

// What is loop? A loop is a programming construct that allows you to repeat a block of code multiple times. It is used to perform repetitive tasks without having to write the same code over and over again. In JavaScript, there are several types of loops, including for loops, while loops, and do-while loops. Each type of loop has its own syntax and use cases, but they all serve the same purpose of executing a block of code repeatedly based on a specified condition.
// real world example of loop: A common real-world example of a loop is when you want to process a list of items, such as an array of products in an online store. You can use a loop to iterate through the array and perform actions on each product, such as calculating the total price or displaying the product information on a webpage. For instance, if you have an array of product prices, you can use a loop to calculate the total cost of all products in the cart.

let productPrices = [19.99, 29.99, 9.99, 49.99];
let totalCost = 0;

for (let i = 0; i < productPrices.length; i++) {
    totalCost += productPrices[i]; // This is a shorthand for totalCost = totalCost + productPrices[i]
}
console.log("The total cost of all products is: $" + totalCost.toFixed(2)); // toFixed(2) is used to format the total cost to 2 decimal places, which is common for currency values.