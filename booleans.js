// let isHungry = true;

// if (isHungry) {
//     console.log("Eat pizza!");
// } else {
//     console.log("Don't eat pizza!");
// } 

// console.log(10 > 5); // true, because 10 is greater than 5.
// console.log(3 === 7); // false, because 3 is not equal to 7.


// let myValue = ""; // An empty string is falsy.
// if (myValue) {
//     console.log("This is true.");
// } else {
//     console.log("This is false."); // Output: This is false.
// }


// let num1 = 15;
// console.log(num1 > 10);

// let str1 = "Tawzib";
// let str2 = "Ahmed";

// console.log(str1 == str2);


// let playerPosition = "Openar";

// if(playerPosition === "Openar") {
//     console.log("Get ready for opening with the Bat");
// } else {
//     console.log("Take some rest and plan your game");

// }


// let isSunny = true;
// let isWeekend = true;

// if (isSunny && isWeekend) {
//     console.log("Go for a picnic!");
// } else {
//     console.log("Just Take Rest");
// }


// let hasRaincoat = false;
// let isRaining = true;

// if (hasRaincoat || isRaining) {
//     console.log("You are ready for the rain!");  
// }


// let isTired = true;

// if (!isTired) {
//   console.log("Let's keep working!"); // Runs because isTired is false.
// }


// You’ll go outside if it’s sunny AND it’s not raining.

let isSunny = true;
let isRaining = false;

if (isSunny && !isRaining) {
    console.log("It's a perfect weather to go outside");
}

// let username = ""; // Empty string is falsy.
// let displayName = username || "Guest";
// console.log(displayName); // Output: Guest



let username = "admin";
let password = "1234";

let inputUsername = "admin";
let inputPassword = "1234";

if (inputUsername === username && inputPassword === password) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}


let num = 30;

if (num % 3 == 0 && num % 5 == 0) {
    console.log(`${num} is Divisible by both 3 and 5`);
} else {
    console.log(`${num} is Not Divisible by both 3 and 5`);
}


let userAge = 19;
let hasLicense = false; 

if (userAge > 18 && !hasLicense) {
    console.log(`You can drive the car now.`);
} else {
    console.log(`You can not drive the car at the moment.`);
} 

let age = 18;
if (age < 18) {
    console.log("Underage");
} else if (age === 18) {
    console.log("Just eligible");
} else {
    console.log("Eligible");
}

let isEven = (num % 2 === 0) ? "Even" : "Odd";
