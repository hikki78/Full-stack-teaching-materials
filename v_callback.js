//Function chapter continues:

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum of two numbers using the above functions?
const ans = sum(5, 10);
displayResult(ans);

// we will now use fnToCall to call the displayResultPassive function instead of displayResult function without changing the code of the above functions:
function sumCallback(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result); // This will call the function passed as an argument with the result of the sum.
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
const anssum = sumCallback(5, 10, displayResultPassive); // Here we are passing the displayResultPassive function as an argument to the sum function. When the sum function is executed, it will call the displayResultPassive function with the result of the sum, which will then print "Sum's result is : 15" to the console.
//const anssum = sumCallback(5, 10, displayResult);

/* Let's understand the differences between sum function and sumCallback function above, the sum function is a simple function that takes two numbers as input, calculates their sum, and returns the result. 
It does not take any additional parameters or perform any other actions. On the other hand, the sumCallback function is a higher-order function that takes three parameters:two numbers and a callback function (fnToCall). 
It calculates the sum of the two numbers and then calls the provided callback function with the result. This allows for more flexibility, as you can pass different callback functions to handle the result in various ways without changing the logic of the sum calculation.
In summary, sum is a straightforward function for adding two numbers, while sumCallback is designed to be more versatile by allowing you to specify how to handle the result through a callback function.
But how is callback helping us in the sumCallback function? The callback function allows us to separate the logic of calculating the sum from the logic of handling the result. This means that we can reuse the sum calculation logic in different contexts by simply passing different callback functions. 
For example, we could pass a callback function that logs the result to the console, updates the UI, or even sends the result to a server. This separation of concerns makes our code more modular and easier to maintain, as we can change how we handle the result without modifying the core logic of the sum calculation.
In the sumCallback function, the callback function (fnToCall) is called with the result of the sum, allowing us to define custom behavior for what happens with that result. 
This is a common pattern in JavaScript, especially in asynchronous programming, where callbacks are used to handle the results of operations that may take some time to complete, such as fetching data from an API or reading a file. 
By using callbacks, we can ensure that our code remains responsive and can handle results as they become available without blocking the execution of other code.*/

/*so what is a callback function? A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
It allows you to specify what should happen after a certain task is finished, enabling asynchronous programming and improving the flexibility of your code.
In JavaScript, callbacks are commonly used for handling events, making API calls, and performing operations that may take time to complete without blocking the main thread of execution.*/

