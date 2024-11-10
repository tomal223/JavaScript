// let firstName = "Tomal";
// console.log(firstName);

// firstName = "Tawzib A.";
// console.log(firstName);


// if (true) {
//     let lastName = "Ahmed";
//     console.log(lastName)
// }

// const lastName = "Ahmed 2";

// console.log(lastName) 

// let name = "Tomal";
// let age = 21;
// let isStudent = true;

// console.log(name, age, isStudent);

// var score = 0;
// let testName = "Ahmed";
// const gameOver = false;

// console.log(score);
// var score = 200;
// console.log(score);
// testName = "Ahmed";

// console.log(score);


// console.log(gameOver);

// Challenge 2: Conditional Reassignment (Using let and const) //
// let points = 10;
// const maxPoints = 100;

// console.log(points);

// points = points + 10; // Add 10 to points;
// console.log("Updated points:", points);
// // maxPoints = maxPoints + 10;

// console.log(maxPoints);

// let num1 = 5 + 5;
// let num2 = "4" + 4;

// console.log(num2);
// console.log(typeof (num2));

// let age = 20;
// let canVote = age >= 18;
// console.log("Can vote:", canVote);

// // Check if a person is both old enough to drive and has a driving license.
// let userName = "Ahmed";
// let userAge = 24;
// let hasDrivingLicense = false;
// let canDrive = userAge >= 18 && hasDrivingLicense;

// console.log( userName + " is old enough and has Driving License \n" + canDrive)

// let firstName = "Tawzib Ahmed";
// let lastName = "Tomal";
// let fullName = firstName + " " + lastName;
// console.log("Full Name is:", fullName)

// let n1 = "5";
// let n2 = n1 + ("6"  - "5");

// console.log("The value of n2 is:", n2 );
// console.log(typeof n2)

// Arithmetic Challenge: Write code that calculates the area and perimeter of a rectangle given length and width values. //
// let height = 12;
// let width = 6;

// let area = height * width;
// let perimeter = 2 * (height + width);
// console.log("Area of the rectangle is:", area);
// console.log("The Perimeter of the rectangle is:", perimeter);

// Assignment Challenge: Start with a balance of 100, then:
// 1. Add 50 to the balance.
// 2. Deduct 30 from the balance.
// 3. Log the final balance.
// let startBalance = 100;
// let finalBalance = (startBalance + 50) - 30;
// console.log("Final Balance:", finalBalance);

// Check if two different numbers are equal using both == and ===. See if you can spot a difference in behavior.
// let number1 = "89";
// let number2 = 89;

// console.log(number1 == number2);
// console.log(number1 === number2);

// Logical Challenge: Use the && and || operators to check if a number is between 10 and 50 or exactly 100.

// let nmbr = 20;

// console.log(nmbr > 10 && nmbr < 50 || nmbr === 100)

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// greet("John");

// Output: Hello John

// function toCelsius(f) {
//     return (5 / 9) * (f - 32);
// }

// let value = toCelsius(222);

// function greetUser(name) {
//     console.log("Hello, " + name + "!");
// }

// greetUser("Alice"); // Output: Hello, Alice!


// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 3); // result now holds the value 8
// console.log(result); // Output: 8


// let multiply = function (a, b) {
//     return a * b;
// };

// console.log(multiply(4, 3)); // Output: 12


// const car = {
//     name: "Royal Enfield",
//     model: "Classic 350",
//     color: "Gun Metal Grey",
//     weight: "195kg",
//     start: function () {
//         return this.name + " has started.";
//     },
//     drive: function () {
//         return this.model + " is running now."
//     },
// }

// console.log(car.start());


// const student = {
//     name: "Tawzib Ahmed Tomal",
//     studentID: 23940,
//     classRoll: 249,
//     department: "Management",
//     session: "2022-23",
//     college: "Kushtia Govt. College",
//     address: {
//         street: "Farakpur Tajmahal Road",
//         city: "Bheramara",
//         zilla: "Kushtia",
//     },
//     examCenter: {
//         centerName: "Islamia College",
//         examCode: 2201,
//         examHall: "Rabindranath Building",
//     },
//     subjectMarks: {
//         accounting: 80,
//         marketting: 34,
//         management: 63,
//         economy: 45,
//         history: 45,
//     }
// }

// let userName = (fname, lname) => `User's Full Name is ${fname + ' ' + lname}`;

// console.log(student);
// console.log(student.examCenter);
// console.log(student.subjectMarks);

// console.log(typeof userName("Tomal", "Ahmed"));

// console.log(typeof student.classRoll);
// console.log(student.department);


// console.log(student.studentID);
// delete student.studentID;
// console.log(student.studentID);


// let calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     subtract: function (a, b) {
//         return a - b;
//     }
// };


// console.log(calculator.add(5, 3)); // Output: 8
// console.log(calculator.subtract(10, 4)); // Output: 6


// const book = {
//     title: "Mastering JavaScript",
//     author: "Tomal",
//     publisher : {
//         name : "Zack H.",
//         location: "Gazipur 2203, Dhaka",
//     }
// }

// console.log(book.publisher.name);

// function Person(first, last, age, eye, sports) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.sports = sports;
// }

// const myFriend = new Person("Tawzib", "Ahmed", 21, "Black", "Cricket");

// console.log(myFriend.sports);


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        return this.firstName + " " + this.lastName
    };
}

const userName = new Person("Tawzib", "Ahmed", 21, "Brown");

console.log(userName.fullName());


function Student(fname, lname, id, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.id = id;
    this.age = age;
    this.fullName = fname + " " + lname;
    this.studentIntro = function () {
        return `Hi everyone, I am ${this.fullName} a ${age} year old student. My student ID is ${id}.`;
    }
}

const studentInfo = new Student("Tawzib", "Ahmed", 114749, 21);

console.log(studentInfo.studentIntro());
console.log(studentInfo.constructor());


function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

let dog1 = new Dog("Buddy", "Golden Retriever");

console.log(dog1.constructor);


// Animal Constructor
function Animal(name, species) {
    this.name = name;
    this.species = species;

    this.sound = function () {
        if (this.species === "Dog") {
            return "Gheu";
        } else if (this.species === "Cat") {
            return "Meow";
        } else if (this.species === "Cow") {
            return "Moo";
        } else {
            return "Unknown sound";
        }
    };
}

let dog = new Animal("test1", "Dog");
let cat = new Animal("test2", "Cat");
let cow = new Animal("test3", "Cow");

console.log(dog.name + " says: " + dog.sound());
console.log(cat.name + " says: " + cat.sound());
console.log(cow.name + " says: " + cow.sound());


let firstName = "Tawzib";
let lastName = "Ahmed";

let fullName = `${firstName + " " + lastName}`;
let message = `Welcome, ${fullName}. It's great to have you here!`;

console.log(message);  

let basicText = "This is a multi-line string.\t It can span multiple lines\n without using any escape characters.";
console.log(basicText);


let multiLineString = `
  lorem ipsum dolor sit amet
  Lorem deola oat etpal
  kafol faslo feol
`;

console.log(multiLineString); 
