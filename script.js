// prompt, Alert and confirm

// const { Alert } = require("bootstrap");

// let age = prompt("What is your name?", "")
// alert(`Thank you for entering your data ${age}, Welcome to X`)

// let isBoss = confirm("Are you the boss?")
// alert(isBoss)

//Type Conversion and typeof
// let value = true;
// alert(typeof value)

// value = String(value)
// alert(typeof value)

// let str = "123"
// alert(typeof str)

// str = Number(str)
// alert(typeof str)

//Operators
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// b = Number(b);
// a = Number(a);
// alert(a + b); //3

// or
// alert alternatively(+a + +b) Using the unary plus which is shorter than Number()

//Comparison
// let result = 5 == 4;
// alert(result)

/*
let year = prompt("What year was Kevin Osayabamwen born?");

if (year == 2002) {
  alert("Correct");
} else {
  alert("Incorrect");
}
  */

// EXERCISES ON TERNARY CONDITIONS
// let number = 7;
// let result;
// if (number % 2 === 0) {
//   result = "Even";
// } else {
//   result = "Odd";
// }
// alert(result);

// let isLoggedIn = false;

// // Show "Welcome back!" if true, otherwise "Please log in"
// let message = isLoggedIn ? "Welcome back!" : "Please log in";
// alert(message); // Output: Welcome back!

// let score = 40

// let grade = score >= 60 ? "Pass" : "Fail";
//     alert(grade)

// let num = 0;

// let description = num > 0
//   ? "Positive"
//   : num < 0
//     ? "Negative"
//     : "Zero";

// alert(description); // Output: Zero

// let num = 0;
// let description =
//   num > 0 ? "Positive" : num < 0 ? "Negative" : num === 0 ? "Zero" : "";
// alert(description);

// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

// let result = a + b < 4 ? "Below" : "Over";

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

/*
let user = prompt("Who's there?", "");

if (user === "Admin") {
  let password = prompt("Enter your password", "");

  if (password === "TheMaster") {
    alert("welcome");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (user === "" || user === null) {
  alert("Canceled");
} else "I don't know you";
*/
// let name = 1;
// let displayName = name ?? "Guest";

// alert(displayName)

// let userTheme = ""; // User left theme blank
// let username = null; // No username set yet
// let volumeLevel = 0; // User wants volume OFF

// Use default values:
// - Theme: "light"
// - Username: "Guest"
// - Volume: 50

// let theme = userTheme || "";
// let name = username ?? "Guest";
// let volume = volumeLevel ?? 50;

// console.log("Theme:", theme); // expected: ""
// console.log("Username:", name); // expected: "Guest"
// console.log("Volume:", volume); // expected: 0

// let discount = 0; // Try also: null, undefined
// let noteFromSeller = "Thanks for your purchase!"; // Try also: "Thanks for your purchase!"
// let quantity = undefined; // Try also: 3

// let finalDiscount = discount ?? null;
// let finalNote = noteFromSeller || 3;
// let finalQuantity = quantity || 1;

// console.log("Discount:", finalDiscount); //0
// console.log("Note:", finalNote); //""
// console.log("Quantity:", finalQuantity); //1

// let userScore = 0;
// let userBio = "";
// let userLanguage = undefined;

// let finalScore = userScore ?? undefined;
// let finalBio = userBio ?? "No bio provided";
// let finalLanguage = userLanguage || "English";

// console.log("Score:", finalScore);         // expected: 0
// console.log("Bio:", finalBio);             // expected: ""
// console.log("Language:", finalLanguage);   // expected: "English"

// let playbackSpeed = 0;
// let userTagline = "";
// let subtitleLanguage = null;

// let finalSpeed = playbackSpeed ?? 1.0;
// let finalTagline = userTagline ?? "No tagline";
// let finalSubLang = subtitleLanguage || "English";

// console.log("Speed:", finalSpeed);         // expected: 0
// console.log("Tagline:", finalTagline);     // expected: ""
// console.log("Subtitles:", finalSubLang);   // expected: "English"

// let temperatureSetting = 0;
// let welcomeMessage = "";
// let preferredLighting = undefined;
// let motionDetection = null;

// let finalTemp = temperatureSetting ?? 22;
// let finalWelcome = welcomeMessage ?? "Welcome Home";
// let finalLight = preferredLighting ?? "Soft White";
// let finalMotion = motionDetection ?? true;

// console.log("Temperature:", finalTemp);     // expected: 0
// console.log("Welcome:", finalWelcome);      // expected: ""
// console.log("Lighting:", finalLight);       // expected: "Soft white"
// console.log("Motion Detection:", finalMotion); // expected: true

// let userName = ""; // User left it blank on purpose
// let age = 0; // User just turned baby age 0!
// let preferredColor = null; // Not set
// let newsletterStatus = undefined; // Not set
// let statusMessage = "All systems normal"; // Provided

// let finalName = userName ?? "Anonymous"; // should be: "" (keep it)
// let finalAge = age ?? 18; // should be: 0 (keep it)
// let finalColor = preferredColor ?? "blue"; // should be: "blue"
// let finalNewsletter = newsletterStatus ?? false; // should be: false
// let finalStatus = statusMessage || "Unknown"; // should be: "All systems normal"

// console.log("Name:", finalName);
// console.log("Age:", finalAge);
// console.log("Color:", finalColor);
// console.log("Newsletter:", finalNewsletter);
// console.log("Status:", finalStatus);

// let count = 0;

// while (count <= 5 ) {
//   console.log("Count:", count);
//   count++;
// }

// let count = 0;

// while (count > 0) {
//   console.log("counting", count);
//   count--;
// }

// let popcorn = 3; // Try with 0 later too

// // // 1. While loop
// // while (popcorn > 0) {
// //   console.log("Still snacking... 🍿", popcorn);
// //   popcorn--;
// // }

// // 2. Do...while loop
// let emptyBag = 3;

// do {
//   console.log("Tried to snack, but empty... ❌");
//   emptyBag--;
// } while (emptyBag > 0);

// let num = 10;

// while (true) {
//   // 👉 your condition goes here
//   if (num % 15 === 0) {
//     console.log("Found it! The number is:", num);
//     break; // stop the loop!
//   }

//   num++; // keep counting up
// }

// for (let i = 10; i >= 2; i-=2) {
//   console.log("i =", i);
// }

// for (let count = 15; count >= 1; count--) {
//   if (count % 3 === 0) {
//   console.log("count is", count);
//   }
// }

// for (num = 5; num <= 25; num += 5) {
//   console.log(num);
// }

// for (i = 50; i >= 30; i--) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// for (i = 1; i <= 30; i += 3) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let prices = [10, 25, 30, 45, 60];

// for (i = 0; i < prices.length; i++) {
//   let discounted = prices[i] * 0.9;
//   {
//     console.log(
//       `Original price: $${prices[i]}, Discounted price: $${discounted.toFixed(
//         2
//       )}`
//     );
//   }
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// for (count = 5; count > 0; count--) {
//   console.log(`Countdown: ${count}`);
// }

// let count = 5;

// while (count > 0) {
//   console.log(`Countdown: ${count}`);
//   count--;
// }

// let num = 3;

// while (num <= 15) {
//   if (num % 3 === 0) {
//     console.log(`${num} is divisible by 3`);
//   }
//   num++;
// }

// for (num = 3; num <= 15; num++) {
//   if (num % 3 === 0) console.log(`${num} is divisible by 3`);

// // NUMBER TRIANGLE SEQUENCE
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += j;
//   }
//   console.log(stars);
// }

// //STAR TRIANGLE SEQUENCE
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let i = 5; i >= 1; i++) {
//   let stars = "";
//   for (let j = 1; j >= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log("Too small");
//     break;
//   case 4:
//     console.log("Exactly!");
//     break;
//   case 5:
//     console.log("Too big");
//     break;
//   default:
//     console.log("I don't know such values");
// }

// TO IF-ELSE STATEMENT
// let a = 2 + 2;

// if (a === 3) {
//   console.log("Too small");
// } else if (a === 4) {
//   console.log("Exactly");
// } else if (a === 5) {
//   console.log("Too big");
// } else {
//   console.log("I don't know such values");
// }

// EXERCISES FOR SWITCH STATEMENTS

// switch (browser) {
//   case "Edge":
//     console.log("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Okay we support these browsers too");
//     break;

//   default:
//     console.log("We hope that this page looks ok!");
// }
// let browser;

// if (browser === "Edge") {
//   console.log("You've got the Edge");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else console.log("We hope that this page is ok");

// MORE EXERCISES
// let day = 1; // 1: Monday, 2: Tuesday, etc.
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(dayName);

// let dayName;
// let day = 1;

// if (day === 1) {
//   dayName = "Monday";
// } else if (day === 2) {
//   dayName = "Tuesday";
// } else if (day === 3) {
//   dayName = "Wednesday";
// } else if (day === 4) {
//   dayName = "Thursday";
// } else if (day === 5) {
//   dayName = "Friday";
// } else if (day === 6) {
//   dayName = "Saturday";
// } else if (day === 7) {
//   dayName = "Sunday";
// } else {
//   dayName = "Invalid Day";
// }
// console.log(dayName);

//
// let grade = "B";

// switch (grade) {
//   case "A":
//     console.log("Excellent!");
//     break;
//   case "B":
//   case "C":
//     console.log("Good");
//     break;
//   case "D":
//     console.log("Needs Improvement");
//     break;
//   case "F":
//     console.log("Failing");
//     break;
//   default:
//     console.log("Invalid grade");
// }

// let grade = "B";

// if (grade === "A") {
//   console.log("Excellent");
// } else if (grade === "B" || grade === "C") {
//   console.log("Good");
// } else if (grade === "D") {
//   console.log("Needs improvements");
// } else if (grade === "F") {
//   console.log("Failing");
// } else {
//   console.log("Invalid Grade");
// }

// let animal = "cat";

// switch (animal) {
//   case "dog":
//     console.log("Woof!");
//     break;
//   case "cat":
//     console.log("Meow!");
//     break;
//   case "bird":
//     console.log("Tweet!");
//     break;
//   default:
//     console.log("Unknown animal sound");
// }

// let animal = "cat";

// if (animal === "dog") {
//   console.log("Woof");
// } else if (animal === "cat") {
//   console.log("Meow");
// } else if (animal === "bird") {
//   console.log("Tweet");
// } else {
//   console.log("Unknown animal");
// }

// let num = 2;

// if (num === 1) {
//   console.log("One");
// } else if (num === 2) {
//   console.log("Two");
// } else if (num === 3) {
//   console.log("Three");
// } else {
//   console.log("Other");
// }

// let num = 2;

// switch (num) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   default:
//     console.log("Other");
// }

// let fruits = "apple";

// switch (fruits) {
//   case "banana":
//     console.log("Yellow");
//     break;
//   case "apple":
//     console.log("Red or Green");
//     break;
//   case "orange":
//     console.log("Orange");
//     break;
//   default:
//     console.log("Unknown Color");
// }

// let score = 90;

// switch (score) {
//   case score >= 90:
//     console.log("A");
//     break;
//   case score >= 80:
//     console.log("B");
//     break;
//   case score >= 70:
//     console.log("C");
//     break;
//   case score >= 60:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
// }

// let score = 80;

// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else {
//   console.log("F");
// }

// let input = "yes";

// if (input === "yes") {
//   console.log("Confirmed");
// } else if (input === "y") {
//   console.log("Confirmed");
// } else if (input === "no") {
//   console.log("Denied");
// } else if (input === "n") {
//   console.log("Denied");
// } else {
//   console.log("Invalid input");
// }

// let day = 3;

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3 || day === 4 || day === 5) {
//   console.log("Midweek");
// } else if (day === 6 || day === 7) {
//   console.log("Weekend");
// } else {
//   console.log("Invalid day");
// }

// let fruit = "plum";

// if (fruit === "banana") {
//   console.log("Yellow and sweet");
// } else if (fruit === "apple" || fruit === "pear") {
//   console.log("Crunchy and fresh");
// } else if (fruit === "plum") {
//   console.log("Stone fruit family ");
// } else if (fruit === "orange") {
//   console.log("Citrus and juicy");
// } else {
//   console.log("I don't know that fruit");
// }

// FUNCTION

// function greetUser() {
//   console.log("Welcome to Frescasa");
// }
// greetUser();

// function printSum(a, b) {
//   console.log("The answer is ",+ a + b);
// }
// printSum(8, 5)

// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(9, 9);
// console.log(result);

// const isEven = function (num) {
//   return num % 2 === 0;
// };
// console.log(isEven(2));

// function sayHi() {
//   console.log("hi");
// }
// sayHi()

// function sum(a, b) {
//   console.log(a+b);
// }
// sum(9, 6)


let message = "Kevin"

function sayHi() { 
  let message = "Bob"
  console.log("Hi "+ message);
}
sayHi()



