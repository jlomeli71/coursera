// This is a single line comment in Javascript

/* This is
a multiline
comment in
Javascript */

// The console log command
console.log("hello");
console.log("%cHello, World", "color: blue; font-size: 40px");

// Variables
var person
var name = "John";
var greeting = "Hello"

console.log(person);
console.log(name);
console.log("Hello", name);
console.log(greeting, name);

/*          Exercise: Declaring variables           */

// Declare a new variable named petDog and give it the name Rex.
var petDog = "Rex";

// Declare a new variable named petCat and give it the name Pepper.
var petCat = "Pepper";

// Console.log the petDog variable.
console.log(petDog);

// Console.log the petCat variable.
console.log(petCat);

// Console.log the text "My pet dog's name is: " and the petDog variable.
console.log("My pet dog's name is:", petDog);

// Console.log the text "My pet cat's name is: " and the petCat variable.
console.log("My pet cat's name is:", petCat);

// Declare another variable and name it catSound. Assign the string of "purr" to it.
var catSound = "purr";

// Declare another variable and name it dogSound. Assign the string of "woof" to it.
var dogSound = "woof";

// Console.log the variable petDog, then the string "says", then the variable dogSound.
console.log(petDog, "says", dogSound);

// Console.log the variable petCat, then the string "says", then the variable catSound.
console.log(petCat, "says", catSound);

// Reassign the value stored in catSound to the string "meow".
catSound = "meow";

// Console.log the variable petCat, then the string "now says", then the variable catSound.
console.log(petCat, "says", catSound);

/* Data types      
    String      "abc", 'xyz'
    Number      123, 12.45
    Boolean     true, false
    Null        null
    Undefined   undefined
    BigInt
    Symbol
*/

/* Arithmetic operators
    +   addition
    -   substraction
    *   multiplication
    /   division
    **  power of
    %   modulus (It returns the remainder of division)
    += addition assigment
*/

/* Comparison operators
    >   greater than
    <   less than
    ==  equal to (value)
    === strict equal to (value and type)
    !=  not equal
    !== strict not equal
*/

/* Logical operators
    &&  and
    ||  or
    !   not
*/

console.log(10 > 9 && 10 < 17);

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

/*          Exercise: Advanced use of operators          */

/* Task 1: Using the logical && operator
You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.
- Create a variable named  score and set it to  8
- Use console.log() that includes the string "Mid-level skills:" and compares 
the score variable to above 0 and below 10 using the && operator
The expected output in the console should be: "Mid-level skills: true". */

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

/* Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.
You need to code a new variable named timeRemaining and set it to 0. 
You also need to code a new variable named energy and set it to 10.
Next, you should write a piece of code that could be used to determine if the game is over, 
based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.
Complete the task using the following steps:
- Declare the variable timeRemaining, and assign the value of 0 to it.
- Declare the variable energy, and assign the value of 10 to it.
- Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
Note that the expected output in the console should be: "Game over: true".  */
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

var timeRemaining = 3;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

/* Task 3: Using the modulus operator, %, to test if a given number is odd
You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
To achieve this task, you need to declare six variables, as follows:
- The first variable, named num1,  should be assigned a number value of 2.
- The second variable, named num2, should be assigned a number value of 5.
- The third variable, named test1, should be assigned the calculation of num1 % 2. 
  Note: executing this code will return a number.
- The fourth variable, named test2, should be assigned the calculation of num2 % 2. 
  Note: executing this code will also return a number.
- The fifth variable, named result1, should be assigned the result of comparing if the number stored in the 
  test1 variable is equal to 0, in other words, this: test1 == 0.
- The sixth variable, named result2, should be assigned the result of comparing if the number stored in the 
  test2 variable is equal to 0, in other words, test2 == 0.
Run console log two times after you've set the variables:
- The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
- The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
Note: The output to the console should be as follows:
Is 2 an even number? true
Is 5 an even number? false  */

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

