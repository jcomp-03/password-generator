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
var numArray = []; // Empty array which will populate based on user input
var numMin = 8;
var numMax = 128;
var finalLength; // Leaving as undefined. Will test for value change in fuction validateInputLength()
var finalCharArray = []; // This array will populate based on outcome of function validateInputChar()

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // need to use escape character \

// split strings above into arrays
var uppercaseCharArray = uppercaseChar.split('');
var lowercaseCharArray = lowercaseChar.split('');
var numberCharArray = numberChar.split('');
var specialCharArray = specialChar.split(''); 

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
  var inputLength = "";
  // Prompt user the desired length of the password.
  inputLength = window.prompt("Welcome to my JavaScript-powered password generator. " +
    "First, please define how many characters (i.e. the length) you wish your password to have. " +
    `The allowable range is ${numMin} to ${numMax} characters, inclusively. Input your choice as a whole integer.`
  );

  // Run function validateInputLength. Validate input. Capture the return value in var validatedLength
  var validatedLength = validateInputLength(inputLength);
  
  if (validatedLength) {
    // run validateInputChar to prompt user set of characters they wish to include in their random password
    // this should always run at this stage in the code
    validateInputChar();
    window.alert("You're past the validateInputChar() in the generatePassword() function.");
  }
  
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
      finalLength = parseInt(length); // change the value of global var finalLength
      console.log(`Value of index ${i} is equal to ${numArray[i]}`);
    }
  }
  if (finalLength != undefined) {
    return true;
  } else {
    // if this runs, the user did not input an integer correctly
    window.alert("You did not input a correct length. Please input a whole integer " +
    `value between ${numMin} and ${numMax} inclusively. Let's start over.`);
    generatePassword();
  }
}

function validateInputChar() {
  debugger;

  inputChar = window.prompt(`Now what set of characters do you wish to include in your password?
  Your options are:
  1. Uppercase characters. i.e. A, B, C,...
  2. Lowercase characters. i.e. a, b, c,...
  3. Number characters. i.e. 0, 1, 2,...
  4. Special characters. i.e.  !\"#$%&'()*+,-./:;<=>?@[]^_\`{|}~)
  You must select at least one option. For instance, 134 or 14.`);
  
  // parse inputChar to use in switch case below
  inputChar = parseInt(inputChar);

 switch (inputChar) {
    case 34:
    case 43:
      finalCharArray = numberCharArray.concat(specialCharArray);
      console.log();
      break;
    case 23:
    case 32:
      finalCharArray = lowercaseCharArray.concat(numberCharArray);
      console.log(finalCharArray);
      break;
    case 14:
    case 41:
      finalCharArray = uppercaseCharArray.concat(specialCharArray);
      console.log(finalCharArray);
      break;
    case 13:
    case 31:
      finalCharArray = uppercaseCharArray.concat(numberCharArray);
      console.log(finalCharArray);
      break;
    case 12:
    case 21:
      finalCharArray = uppercaseCharArray.concat(lowercaseCharArray);
      console.log(finalCharArray);
      break;
   case 1:
      finalCharArray = uppercaseChar;
      console.log(finalCharArray);
      break;
   case 2:
      finalCharArray = lowercaseCharArray;
      console.log(finalCharArray);
      break;
   case 3:
      finalCharArray = numberCharArray;
      console.log(finalCharArray);
      break;
   case 4:
      finalCharArray = specialCharArray;
      console.log(finalCharArray);

   default:
    window.alert("It appears you did not enter a valid response. Please try again.");
    var ans = window.confirm("Do you wish to continue with this password generator?");
    if (ans) {
      validateInputChar(); // call this same function again to give user another try 
    } else {
      break;
    }
 }

}