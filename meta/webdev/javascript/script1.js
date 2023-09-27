// This is a single line comment in Javascript

/* This is
a multiline
comment in
Javascript */

/* Truthy
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
All values are truthy unless they are defined as falsy. That is, all values are truthy except:
- false, 
- 0, 
- -0, 
- 0n, 
- "", 
- null, 
- undefined, 
- NaN,      
- document.all    */

/* Falsy
A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context. 
*/

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

/* Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.
Note: This task should be completed on a single line of code. The output in the console should be 15.   */

console.log(5+10);

/* Task 5: Concatenate numbers and strings using the + operator
Code three variables:
- The first variable should be a string with the following value: "Now in ". Name the variable now.
- The second variable should be a number with the value: 3. Name the variable three.
- The third variable should a string with the following value: "D!". Name the variable d.
- Console log the following code: now + three + d.
Note: The expected output should be: "Now in 3D!".      */
var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d);

/* Task 6: Use the += operator to accumulate values in a variable
Code a new variable and name it counter, assigning it to the value of 0.
On the next line, use the += operator to increase the value of counter by 5.
On the next line, use the += operator to increase the value of counter by 3.
On the fourth line, console log the value of the counter variable.
Note: The output value should be 8.     */

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

/*          Conditional statements           */

// if statements

var condition;

if (condition == true) {
  // code block
}

// if, else statements

if (condition == true) {
  // code block
}
else {
  // code block
}

// if, else if, else

if (condition == true) {
  // code block
}
else if (condition == true) {
  // code block
}
else {
  // code block
}

// Example with if, else if, else
var light;

if(light == "green") {
  console.log("Drive")
} else if (light == "orange") {
  console.log("Get ready")
} else if (light == "red") {
  console.log("Dont' drive")
} else {
  //this block will run if no condition matches
  console.log("The car is not green, orange, or red");
}

// Now with switch case statements (when there are multile conditions)

light = "red";

switch(light) {
  case 'green':
      console.log("Drive");
      break;
  case 'orange':
      console.log("Get ready");
      break;
  case 'red':
      console.log("Don't drive");
      break;
  default:
      //this block will run if no condition matches
      console.log('The light is not green, orange, or red');
      break;
}

/*    Exercise: Practice conditional statements   */

/* In this exercise, you will practice working with if else statements. By the end of this exercise, 
you will be able to write an if else statement that determines your source of income based on your age. 
You will also be able to write a switch statement that determines your evening routine based on the day of the week.  |*/

/* Complete the following steps to create: Are You Old Enough?
- Declare a variable age using the var keyword and set it to the number 10.
- Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. 
  Inside the if block, console.log the sentence: "You get your income from your pension".
- Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. 
  Inside this "else if" block, type "console.log" and then "Each month you get a salary".
- Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, 
  "type console.log" and then "You get an allowance".
- Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value 
  of the age variable is not numerical".
Try adjusting the age and executing the program to see how it will affect the output.   */

var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension.")
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary")
} else if (age < 18) {
  console.log("You get an allowance")
} else {
  console.log("The value of the age variable is not numerical")
}

/* Code the days of the week program as a switch statement
- On the next line, define a new variable, name it day, and set its value to "Sunday".
- Start coding a switch statement, passing the day variable as the expression to evaluate.
- Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. 
  Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), 
  and add a break; on the line below.
- At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
- Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.     */

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("On", day, "I do something" );
    break;
  case "Tuesday":
    console.log("On", day, "I do something" );
    break;
  case "Wednesday":
    console.log("On", day, "I do something" );
    break;
  case "Thursday":
    console.log("On", day, "I do something" );
    break;
  case "Friday":
    console.log("On", day, "I do something" );
    break;
  case "Saturday":
    console.log("On", day, "I do something" );
    break;
  case "Sunday":
    console.log("On", day, "I do something" );
    break;
  default:  
    console.log('There is no such day');
    break;
  }

  /*    For loops           */

  for (var i = 1; i < 11; i++) {
    console.log(i);
  }

  /*    While loops        */

  var i = 1;

  while (i < 11) {
    console.log(i);
    i+=2; 
  }

/*    Exercise: Repetitive tasks with loops     */

/* Task 1: Write a "for" loop that will perform exactly the same repetitive code as this: 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')  */

for (var i = 1; i < 6;  i++) {
  console.log(i);
}
console.log('Counting completed!');

/* Task 2: Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')  */

for (var i = 5; i > 0;  i--) {
  console.log(i);
}
console.log('Countdown finished!');

/* Task 3: Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')    */
var i = 1;
while (i < 6) {
  console.log(i);
  i++;
}
console.log('Counting completed!');

/* Task 4: Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')   */
var i = 5;
while (i > 0) {
  console.log(i);
  i--;
}
console.log('Countdown finished!');

/* Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022) */
var i = 2018;
while (i <= 2022) {
  console.log(i);
  i++;
}

// nested loops - one inside another
for (var firstNum = 0; firstNum < 3; firstNum++) {
  for (var secondNum = 0; secondNum < 4; secondNum++) {
      console.log(firstNum + ", " + secondNum);
  }
}

var cubes = 'ZOOLOGICO';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

/*  Exercise: Working with conditionals and loops   */

/* Exercise 1: 
In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.
To make the counter increment by 1 on each loop, you will use i++.
The exit condition for the for loop should match the output given below. 
Inside the loop, write an if-else statement, which will check the following conditions:
- First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".
- Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".
- Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".
For all the remaining values of i, your code will console log just the value of i.  */

for (var i = 1; i < 11; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

/* Exercise 2. 
Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question. */

for (var i = 1; i < 11; i++) {
  switch(i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
      break;          
  }
}

