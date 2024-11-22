// let fruits = ["apple", "banana", "cherry", "date"];

// fruits.push("elderberry"); // Add to the end
// fruits.unshift("fig"); // Add to the beginning
// console.log("After adding:", fruits);  

// fruits.pop(); // Remove last element
// fruits.shift(); // Remove first element
// console.log("After removing:", fruits);   

// fruits[1] = "blueberry"; // Update an element
// console.log("After modifying:", fruits); // ["apple", "blueberry", "cherry", "date"]

// let sliced = fruits.slice(1, 3); // Extract a portion (not mutating)
// console.log("Sliced portion:", sliced); // ["blueberry", "cherry"]

// fruits.splice(1, 2, "grape", "kiwi"); // Remove 2 at index 1, insert 2 new
// console.log("After splice:", fruits); // ["apple", "grape", "kiwi", "date"]

// console.log("Index of 'kiwi':", fruits.indexOf("kiwi")); // 2
// console.log("Includes 'banana':", fruits.includes("banana")); // false

// fruits.forEach((fruit) => console.log("Fruit:", fruit));

// let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
// console.log("Uppercase fruits:", upperFruits); // ["APPLE", "GRAPE", "KIWI", "DATE"]

// let shortNames = fruits.filter((fruit) => fruit.length <= 5);
// console.log("Short names:", shortNames); // ["apple", "grape", "kiwi", "date"]

// let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
// console.log("Total length of all fruits:", totalLength); // 18

// let sortedFruits = [...fruits].sort(); // Ascending order
// console.log("Sorted fruits:", sortedFruits); // ["apple", "date", "grape", "kiwi"]

// let reversedFruits = [...fruits].reverse(); // Reverse order
// console.log("Reversed fruits:", reversedFruits); // ["date", "kiwi", "grape", "apple"]

// let nestedArray = [[1, 2], [3, 4], [5]];
// let flatArray = nestedArray.flat(); // Flatten one level
// console.log("Flattened array:", flatArray); // [1, 2, 3, 4, 5]

// let foundFruit = fruits.find((fruit) => fruit.startsWith("g"));
// console.log("Found fruit:", foundFruit); // "grape"

// let allShort = fruits.every((fruit) => fruit.length <= 5);
// console.log("All names are short:", allShort); // true

// let someShort = fruits.some((fruit) => fruit.length <= 4);
// console.log("Some names are very short:", someShort);  

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // Start at index 2 (3rd element: "cherry") and remove 2 elements
// fruits.splice(2, 2);
// console.log(fruits); // ["apple", "banana", "elderberry"]

// // Start at index -2 (second-to-last element: "date") and remove 1 element
// fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// fruits.splice(-2, 1);
// console.log(fruits); // ["apple", "banana", "cherry", "elderberry"]

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // Extract from index 1 (inclusive) to index 3 (exclusive)
// let sliced = fruits.slice(1, 3);
// console.log(sliced); // ["banana", "cherry"]

// // Extract the last 2 elements using negative index
// sliced = fruits.slice(-2);
// console.log(sliced); // ["date", "elderberry"]

// // Extract from index -3 (3rd from the end) to the last element
// sliced = fruits.slice(-3);
// console.log(sliced); // ["cherry", "date", "elderberry"]
