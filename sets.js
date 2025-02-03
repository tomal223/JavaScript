// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");

// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters);

let text = "";

// letters.forEach((value) => {
//     console.log(value);
// });

// console.log(letters instanceof Set);

if (letters instanceof Set) { 
    letters.forEach((value) => {
        text=+ value;
        console.log(`${text} = ${value}`);
    });
}

for (const x of letters) {
    text += x;
    console.log(`${text}`);
  }