// 1. Write a function that can print any random number between any two given numbers (including them).

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger(1, 10));


// 2. How can you order roll numbers of students in your class sequentially?

const students = ["Tomal", "Ratul", "John", "Doe", "Mike"];
const studentsRoll = [4, 2, 1, 6, 7, 3, 8, 9];

console.log(students.sort());
console.log(studentsRoll.sort(function (a, b) {
    return a - b;
}));

// 3. Write a function that can tell us whether an year is a leap year or not.