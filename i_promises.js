//Give some common async functions that javacript has inbuilt:
//1. setTimeout: This function allows you to execute a piece of code after a specified delay. It takes two arguments: a callback function and the delay in milliseconds.
setTimeout(function() {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

//2. setInterval: This function allows you to execute a piece of code repeatedly at specified intervals. It takes two arguments: a callback function and the interval in milliseconds.
setInterval(function() {
    console.log("This message is displayed every 3 seconds.");
}, 3000);

//3. fetch: This function is used to make network requests and retrieve data from a server. It returns a promise that resolves to the response of the request.
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

//4. Promise: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a more manageable way, avoiding callback hell.
let myPromise = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation
    setTimeout(function() {
        let success = true; // Change this to false to simulate an error
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed.");
        }
    }, 2000);
});

myPromise.then(function(result) {
    console.log(result); // This will log "Operation completed successfully!" after 2 seconds
}).catch(function(error) {
    console.error(error); // This will log "Operation failed." if success is false
}); 

//5. fs.readFile: This function is used in Node.js to read the contents of a file asynchronously. It takes the file path and a callback function as arguments.
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});

