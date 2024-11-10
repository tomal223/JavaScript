let str = "Hello, World!";
console.log(str.length); 

console.log(str[0]);
console.log(str[4]);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(1));
console.log(str.indexOf("World"));


let str2 = "Hello, World! Welcome to the World!";
console.log(str2.lastIndexOf("World"));
console.log(str2.indexOf("the"));
console.log(str.slice(0, -5)); 

console.log(str.substring(0, 6)); 

console.log(str.replace("World", "JavaScript"));
console.log(str.includes("World"));



let arr = "apple,orange,banana, orange";
console.log(arr.split(","));


let str1 = "Hello, ";
let str3 = "World!";
console.log(str1.concat(str3)); 