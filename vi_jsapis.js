//getlength: Returns the length of the whole string. It counts the number of characters in the string, including spaces and punctuation. It is a given JS function that can be used to find the length of a string. It is a built-in function in JavaScript and can be called on any string variable or string literal. The getLength function takes a string as an argument and logs the original string and its length to the console. In the example provided, it will output "original string is : Hello, World!" and "length of the string is : 13" to the console.
function getLength(str) {
    console.log("original string is : ", str);
    console.log("length of the string is : ", str.length);
}
getLength("Hello, World!");

//findIndexOf: Returns the index of the first occurrence of a specified value in a string. It is a built-in function in JavaScript that can be called on any string variable or string literal. The findIndexOf function takes a string and a search value as arguments and logs the original string, the search value, and the index of the first occurrence of the search value in the string to the console. In the example provided, it will output "original string is : Hello, World!", "search value is : o", and "index of the first occurrence of 'o' is : 4" to the console.
function findIndexOf(str, target) {
    console.log("original string is : ", str);
    console.log("Index is : ", str.indexOf(target));
}
findIndexOf("Hello, World!", "o");

// but if we write it like this 
function findIndexOf(str, target) {
    console.log("original string is : ", str);
    console.log("Index is : ", str.lastIndexOf(target));
}
findIndexOf("Hello, World world world", "world");

//getSlice: Returns a portion of a string based on the specified start and end indices. It is a built-in function in JavaScript that can be called on any string variable or string literal. The getSlice function takes a string, a start index, and an end index as arguments and logs the original string, the start and end indices, and the sliced portion of the string to the console. In the example provided, it will output "original string is : Hello, World!", "start index is : 0", "end index is : 5", and "sliced portion of the string is : Hello" to the console.
function getSlice(str, start, end) {
    console.log("original string is : ", str);
    console.log("After slice: ", str.slice(start, end));
}
getSlice("Hello, World!", 0, 5);

//getSubstring: Similar to getSlice, but it does not accept negative indices. It is a built-in function in JavaScript that can be called on any string variable or string literal. The getSubstring function takes a string, a start index, and an end index as arguments and logs the original string, the start and end indices, and the substring of the string to the console. In the example provided, it will output "original string is : Hello, World!", "start index is : 0", "end index is : 5", and "substring of the string is : Hello" to the console.
function getSubstring(str, start, end) {
    console.log("original string is : ", str);
    console.log("After substring: ", str.substring(start, end));
}
getSubstring("Hello, World!", 0, 5); //getSubstring is deprecated.

//str.replace: Returns a new string with some or all matches of a pattern replaced by a replacement. It is a built-in function in JavaScript that can be called on any string variable or string literal. The replaceString function takes a string, a search value, and a replacement value as arguments and logs the original string, the search value, the replacement value, and the new string with the replacements to the console. In the example provided, it will output "original string is : Hello, World!", "search value is : World", "replacement value is : JavaScript", and "new string after replacement is : Hello, JavaScript!" to the console.
const str = "Hello, World!";
const newStr = str.replace("World", "JavaScript");
console.log("original string is : ", str);
console.log("new string after replacement is : ", newStr); // Output: "Hello, JavaScript!"

//split: Returns an array of substrings based on a specified separator. It is a built-in function in JavaScript that can be called on any string variable or string literal. The splitString function takes a string and a separator as arguments and logs the original string, the separator, and the array of substrings to the console. In the example provided, it will output "original string is : Hello, World!", "separator is : , ", and "array of substrings is : [ 'Hello', 'World!' ]" to the console.
const value = "Hi my name is Megh";
const words = value.split(",");
console.log(words);

//trim: Returns a new string with whitespace removed from both ends of the original string. It is a built-in function in JavaScript that can be called on any string variable or string literal. The trimString function takes a string as an argument and logs the original string and the trimmed string to the console. In the example provided, it will output "original string is :    Hello, World!   " and "trimmed string is : Hello, World!" to the console.
const strWithWhitespace = "   Hello, World!   ";
const trimmedStr = strWithWhitespace.trim();
console.log("original string is : ", strWithWhitespace);
console.log("trimmed string is : ", trimmedStr); // Output: "Hello, World!"

//toUpperCase: Returns a new string with all characters converted to uppercase. It is a built-in function in JavaScript that can be called on any string variable or string literal. The toUpperCaseString function takes a string as an argument and logs the original string and the uppercase string to the console. In the example provided, it will output "original string is : Hello, World!" and "uppercase string is : HELLO, WORLD!" to the console.
const originalStr = "Hello, World!";
const upperCaseStr = originalStr.toUpperCase();
console.log("original string is : ", originalStr);
console.log("uppercase string is : ", upperCaseStr); // Output: "HELLO, WORLD!"

//toLowerCase: Returns a new string with all characters converted to lowercase. It is a built-in function in JavaScript that can be called on any string variable or string literal. The toLowerCaseString function takes a string as an argument and logs the original string and the lowercase string to the console. In the example provided, it will output "original string is : Hello, World!" and "lowercase string is : hello, world!" to the console.
const originalStr2 = "Hello, World!";
const lowerCaseStr = originalStr2.toLowerCase();
console.log("original string is : ", originalStr2);
console.log("lowercase string is : ", lowerCaseStr); // Output: "hello, world!"

//explainParseInt: The parseInt function in JavaScript is used to convert a string into an integer. It takes a string as an argument and returns the integer representation of that string. If the string cannot be converted to a valid integer, it returns NaN (Not-a-Number). The parseInt function can also take an optional second argument called radix, which specifies the base of the numeral system to be used for parsing the string. For example, if you want to parse a binary number, you can set the radix to 2. If you want to parse a hexadecimal number, you can set the radix to 16. In the example provided, it will output "The integer value is : 42" to the console.
const strNum = "42";
const intNum = parseInt(strNum);
console.log("The integer value is : ", intNum); // Output: 42

//explainParseFloat: The parseFloat function in JavaScript is used to convert a string into a floating-point number. It takes a string as an argument and returns the floating-point representation of that string. If the string cannot be converted to a valid floating-point number, it returns NaN (Not-a-Number). The parseFloat function parses the string until it reaches a character that is not a valid part of a floating-point number, at which point it stops parsing and returns the number parsed up to that point. For example, if you have the string "3.14abc", parseFloat will return 3.14. In the example provided, it will output "The floating-point value is : 3.14" to the console.
const strFloat = "3.14";
const floatNum = parseFloat(strFloat);
console.log("The floating-point value is : ", floatNum); // Output: 3.14

//Array methods
const initialArray = [1, 2, 3, 4, 5];
initialArray.push(6); // The push method adds a new element to the end of the array. In this case, it adds the number 6 to the end of the initialArray. After this operation, initialArray will be [1, 2, 3, 4, 5, 6].
console.log(initialArray); // Output: [1, 2, 3, 4, 5, 6]

const removedElement = initialArray.pop(); // The pop method removes the last element from the array and returns that element. In this case, it removes the number 6 from the end of the initialArray and assigns it to the variable removedElement. After this operation, initialArray will be back to [1, 2, 3, 4, 5], and removedElement will be 6.
console.log(initialArray); // Output: [1, 2, 3, 4, 5]
console.log("Removed element is : ", removedElement); // Output: "Removed element is : 6"   

initialArray.unshift(0); // The unshift method adds a new element to the beginning of the array. In this case, it adds the number 0 to the start of the initialArray. After this operation, initialArray will be [0, 1, 2, 3, 4, 5].
console.log(initialArray); // Output: [0, 1, 2, 3, 4, 5]

const removedFirstElement = initialArray.shift(); // The shift method removes the first element from the array and returns that element. In this case, it removes the number 0 from the start of the initialArray and assigns it to the variable removedFirstElement. After this operation, initialArray will be back to [1, 2, 3, 4, 5], and removedFirstElement will be 0.
console.log(initialArray); // Output: [1, 2, 3, 4, 5]
console.log("Removed first element is : ", removedFirstElement); // Output: "Removed first element is : 0"

//concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2); // The concat method is used to merge two or more arrays. In this case, it merges array1 and array2 into a new array called combinedArray. After this operation, combinedArray will be [1, 2, 3, 4, 5, 6], while array1 and array2 will remain unchanged.
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
}); // The forEach method executes a provided function once for each array element.


