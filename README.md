# Password Generator (Focus: JavaScript)
###### GitHub Pages Deployment: https://jcomp-03.github.io/password-generator/

A random password generator.
  - Create variables containing different data types used to create a password
  - Write conditional statements to add in password criteria that the user has selected
  - Write for loops to create a password from the variables you created
  - Use functions to display the password to the user


Some points I'd like to highlight in this challenge are:

### Introduction to Event Listeners
When the user runs the index.html file, they are presented with a screen that has a red button which they can press to generate the random password. They are then led through a series of prompts which ultimately determines the the length and allowed set of characters in their random password. See the photos below for reference. The random password is displayed in the dashed box in the second photo. In the JavaScript file, I create a variable which referes to that HTML element with id attribute of #generate. I append to that variable the method *.AddEventListener("click", writePassword())* which listens for the event of "click" (i.e. when the button is clicked); when the button is clicked, the function *writePassword()* runs, allowing for the remainder of the JavaScript to run.

#### Screen upon page loading
![Screen on loading](/assets/images/HTML-screen-capture.JPG)
#### Screen after generating random password
![Screen after pressing red button and generating password](/assets/images/HTML-output-password.JPG)

### Utilization of JavaScript Standard Built-In Object Math
I was introduced to the standard built-in JavaScript object Math in the lesson module, and had to apply its usage to this week's challenge.
My function *randomNumber(min, max)* takes two input arguments and then uses the static methods Math.floor and Math.random to return a random number whose value will range between *min* and *max* inclusively. This random number is used as the index position for selecting a random character from my array finalCharArray. All this happens in my custom function *makeRandomPassword(length, charArray)*.

### Creation of Custom JavaScript Functions
This lesson was good in that it challenged you to create your own custom functions and give you practice in how to break down a task into smaller chunks enclosed within a function. I initially estimated having to create about 3 custom functions to get everything done, but I ended up with about 6 in total, some functions comprising much less code and serving very specific, erh, *functions*.

#### Screenshot of the functions in my .js file
![List of functions used in developing JavaScript app](/assets/images/functions-used-in-code.JPG)
