/*          Functions           */

function addTwoNums(a, b) {
    // Code block
    var c = a + b;
    console.log(c);
}

addTwoNums(2, 3);

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); 


/*          Exercise: Practicing with functions           */

// Your task in this exercise is to code a function which will be able to take a word and locate the position 
// of a chosen letter in that given word.  

// Task 1: Write a function named letterFinder that accepts two parameters: word and match.

function letterFInder(word, match) {
    // Code block
}

// Task 2: Code a 'for' loop inside the function's body. The for loop's counter should start at zero, 
// increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

function letterFInder(word, match) {
    for (var i = 0; i < word.length; i++) {
        // Code block
    }
}

// Task 3: Add an if statement inside the for loop whose condition works as follows:
// - Access each of the letters inside the passed in word using the counter variable, with word[i]. 
// - Check if the current word[i] is equal to the value of match.

function letterFInder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            break;
        } 
    }
}

// Task 4: console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

function letterFInder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } 
    }
}

// Task 5: Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

function letterFInder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

// Task 6: Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".

letterFInder('test', 't');

/*          Objects           */

// One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.
// To be able to access this object literal, it is very common to assign it to a variable, such as:

var user = {}; //create an object

//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

// For example, here's a table object:
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

// To access the table object, I can simply console log the entire object:  
console.log(table);//display the object in the developer console

// Additionally, I can console log any individual property, like this:  
console.log(table.color); // 'brown'

// Now that I have this "syntax recipe", I can build any other object in a similar way: 
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

// An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

// Additionally, nothing is preventing me from combining the two approaches.
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

// This flexbility additionally means that I can update already existing properties, not just add new ones:  
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

/*      Object Literals and the Brackets Notation       */

// There is an alternative syntax to the dot notation I used up until this point.
// This alternative syntax is known as the brackets notation.

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

// I can both access and update properties on objects using either the dot notation, or the brackets notatio

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

// With the brackets notation, I can add space characters inside property names, like this:

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

// Additionally, I can add numbers (as the string data type) as property keys: 

car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

// Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: 
// It can evaluate expressions.
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

/*      Arrays are objects      */

// In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.
// One of the most commonly used built-in methods on arrays are the push() and the pop() methods.

// To add new items to an array, I can use the push() method:
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
console.log(fruits);

// To remove the last item from an array, I can use the pop() method:  
fruits.pop();
console.log(fruits); // ['apple']

/*      Math methods      */

// Number constant
Math.PI

// Math.random()

var decimal = Math.random();
console.log(decimal);
console.log(decimal*10);

// Math.ceil() rouds up

var rounded = Math.ceil(0.98);
console.log(rounded);

// Math.floor() rounds down

// Math.trunc() trims the decimal, leaving only the integer

// Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

// Math.sqrt(16) - calculates the square root of 16, the result is 4 

// Math.cbrt(8) - finds the cube root of 8, the result is 2 

// Math.abs(-10) - returns the absolute value, the result is 10 

// Math.log(), Math.log2(), Math.log10() - Logarithmic methods 

// Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9 - Return the minimum and maximum values 

// Math.sin(), Math.cos(), Math.tan(), etc. -  Trigonometric methods

// typeoff

var test = typeof([1,2,3]);
console.log(test);

// String methods

var greet = "Hello, ";
var place = "World"

greet.length; // 7

greet.charAt(0); // 'H'

"Wo".concat("rl").concat("d"); // 'World'

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".lastIndexOf('-'); // 5

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

/*      Exercise: Creating arrays and objects       */

// Create a new empty array literal and assign it to the variable clothes.
var clothes = []

// Add 5 of your favorite items of clothing as strings using the push() method.

clothes.push("calzones");
clothes.push("camisa");
clothes.push("pantalon");
clothes.push("cinturon");
clothes.push("calcetines");

console.log(clothes)

// Remove the fifth piece of clothing from the array using the pop() method.

clothes.pop()

console.log(clothes)

// Add a new piece of clothing using the push() method.

clothes.push("corbata")

// Use console.log to show the third item from the clothes array in the console.

console.log(clothes[2])

// Create a new empty object literal and assign it to the variable favCar.

var favCar = {};

// Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

favCar.color = "blue";

// Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

favCar.convertible = true;

// Use the console to log the entire favCar object.

console.log(favCar);

/*      Object Methoids     */

// We can add new key-value pairs to existing objects using the dot notation and the assignment operator. 

var car = {};
car.mileage = 98765;
car.color = "red"; //update the value of a property of the car objject
console.log(car);

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
    console.log('engine running'); 
  }

  car.lightsOn = function() {
    console.log("The lights are on.")
}

console.log(car);

car.turnKey()

car.lightsOn()

/*  Syntax, logical and runtime errors  */

/* Common errors in Javascript
- ReferenceError: when one tries to use variables that haven't been declared anywhere. 
- SyntaxError: any kind of invalid JavaScript code.  
- TypeError: an example, trying to run a method on a non-supported data type. 
- RangeError:  when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.
- AggregateError 
- Error 
- InternalError 
- URIError
*/

/*  try and catch       */

try {
    console.log( y + z)
} catch(err) {
    // do something
}

try {
    // Forces an error
    throw new Error();
    // also you can use "throw new ReferenceRror();"
} catch(err) {
    console.log(err)
}

/*      Exercise: Error prevention      */

// Task 1: Code a function declaration
// You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.

function addTwoNums(a, b) {
    console.log(a + b)
}

// Task 2: Invoke the addTwoNums function with a number and a string
// You need to invoke the addTwoNums using the following arguments: 5 and "5".

addTwoNums(5, "5")

// Task 3: Update the addTwoNums function with a try...catch block
// Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. 
// Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}

// Task 4: If the passed-in arguments are not numbers, throw an error
// If either of the arguments passed to the addTwoNums are not numbers, you'll throw an error.
// Specifically, code a conditional with the following logic:
// - if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, 
//    pass a custom error message of 'the first argument is not a number'.
// - else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, 
//   pass a custom error message of 'the second argument is not a number'.
// - else, console log a + b  
// Once you've completed this task, all the code inside the try block will be inside these conditional statements.

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}

// Task 5: Update the catch block
// Inside the catch block, update the code from console.log(err) to console.log("Error!", err).

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}

// Task 6: Invoke the addTwoNums function
// Invoke the addTwoNums function using 5 and "5" as arguments.

addTwoNums(5, "5");

// Task 7: Add another console log under the addTwoNums function invocation
// Add another line of code that console logs the string "It still works".

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")
