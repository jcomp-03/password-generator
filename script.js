// This week’s Challenge requires you to create an application that 
// an employee can use to generate a random password based on criteria
// they’ve selected. This app will run in the browser, and will feature
// dynamically updated HTML and CSS powered by JavaScript code that 
// you write. It will have a clean and polished user interface that is
// responsive, ensuring that it adapts to multiple screen sizes. This week’s
// coursework will teach you all the skills you need to succeed in this
// assignment.

// The password can include special characters. If you’re unfamiliar with these,
// see this list of Password Special Characters from the OWASP Foundation (Links to an external site.).
// https://www.owasp.org/index.php/Password_special_characters
// The same list as string (between double quotes): " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here
// Global variables for now
var numArray = [];
var numMin = 8;
var numMax = 12;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // assign whatever password value is created by function generatePassword() 
  // to the value of the HTML element textarea
  passwordText.value = password;
}

// Add event listener to generate button. When the HTML button #generate is clicked (i.e. that is the event),
// run the function writePassword(). Simple enough!
generateBtn.addEventListener("click", writePassword);


// code for function generatePassword() here
function generatePassword() {
  // Prompt the user the desired length of the password.
  // Validate the user input of length. Must be integer between 8 and 128.
  // Do not progress to next prompt until input is validated.
  // Use the validated user input as a constraint variable on the randomly generated password later.

  var inputLength = window.prompt("Welcome to my JavaScript-powered password generator. " +
    "First, please define how many characters (i.e. the length) you wish your password to have. " +
    `The allowable range is ${numMin} to ${numMax} characters, inclusively. Input your choice as a whole integer.`
  );
  // capture the return value of running function validateInputLength
  var validatedLength = validateInputLength(inputLength);
  if (validatedLength) {
    window.alert("You've made it to the if statement in generatePassword");
  }

  // Prompt the user the desired set of allowable characters. One char set minimum is required. Validate the user input.
  // Validate the user input of allowable characters. If not all four options, one option NEEDS to have been selected.
  
  // In some manner, use the now defined global array of allowable characters and the length to generate the random password.
  // This will look like some for loop that loops through the character array randomly selecting a character and assigning
  // it to the password string. The for loop continues until index counter equals the desired length (plus one)
  
}

function validateInputLength(length) {
  // populate numArray with numbers given global min-max bounds
  for (let i = 0; i < (numMax-numMin + 1); i++) {
    numArray[i] = numMin + i;
    // compare length to each item in the numArray for equality
    if (length == numArray[i]) {
      window.alert("Thank you inputting a correct length as an integer.");
      return true;
    }
  }
  // if this runs, the user did not input an integer correctly
  window.alert("You did not input a correct length. Please input a whole integer " +
   `value between ${numMin} and ${numMax} inclusively. Let's start over.`);
  generatePassword();
}

// writePassword();