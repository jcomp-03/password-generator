// Assignment code here
// Global variables for now
var numArray = []; // Empty array which will populate based on user input
var numMin = 8;
var numMax = 12;
var finalLength; // Leaving as undefined. Will test for value change in function validateInputLength()
var finalCharArray = []; // This array will populate based on outcome of function validateInputChar()
var quit = false;

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'; // need to use escape character \

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
  if(password) {
  passwordText.value = password;
  } else {
    quitNow();
  }
}

// Add event listener to generate button. When the HTML button #generate is clicked (i.e. that is the event),
// run the function writePassword().
generateBtn.addEventListener("click", writePassword);

// code for function generatePassword() here
function generatePassword() {
  
  // Prompt user the desired length of the password.
  var inputLength = window.prompt("Welcome to my JavaScript-powered password generator. " +
  "First, please define how many characters (i.e. the length) you wish your password to have. " +
  `The allowable range is ${numMin} to ${numMax} characters, inclusively. Input your choice as a whole integer.`
  );
  
  // If null, break out of generatePassword() and run quitNow()
  if (inputLength == null) {
    return false;
  }

  // Run validateInputLength(). Capture return in var validatedLength
  var validatedLength = validateInputLength(inputLength);

  // Test for value of validatedLength
  if (validatedLength) {
    // Run validateInputChar(). Capture return in var validatedChar
    var validatedChar = validateInputChar();
    
    if (validatedChar) {
      //continue
      window.alert("validatedChar returned true.");
    } else {
      // run quitNow()
      quitNow();
    }

  }

  // In some manner, use the now defined global array of allowable characters and the length to generate the random password.
  // This will look like some for loop that loops through the character array randomly selecting a character and assigning
  // it to the password string. The for loop continues until index counter equals the desired length (plus one) 
}


function validateInputLength(length) {
  if (!length) {
    var answ = window.confirm("You entered nothing. Do you wish to continue? Select cancel to quit.");
    if (answ) {
      generatePassword();
    } else {
      return false;
    }
  }

  // populate numArray with numbers given global min-max bounds
  for (let i = 0; i < (numMax-numMin + 1); i++) {
    numArray[i] = numMin + i;
    // compare for equality. this does type conversion
    if (length == numArray[i]) {
      // change the value of global var finalLength
      finalLength = parseInt(length);
      return true;
    }
  }

  // if finalLength is still undefined, start over
  if (finalLength == undefined) {
    window.alert("You did not input a correct length. Please input a whole integer " +
    `value between ${numMin} and ${numMax} inclusively. Let's start over.`);
    generatePassword();
  }
}


function validateInputChar() {
  inputChar = window.prompt(`Now what set of characters do you wish to include in your password?
  Your options are:
  1. Uppercase characters. i.e. A, B, C,...
  2. Lowercase characters. i.e. a, b, c,...
  3. Number characters. i.e. 0, 1, 2,...
  4. Special characters. i.e.  !\"#$%&'()*+,-./:;<=>?@[]^_\`{|}~)
  You must select at least one option. For instance, 134 or 14.`);
  
  // parse inputChar to use in switch case below
  inputChar = parseInt(inputChar);
  
  // debugger;
  switch (inputChar) {
    case 1234:
      finalCharArray = uppercaseCharArray.concat(lowercaseCharArray, numberCharArray, specialCharArray);
      console.dir(finalCharArray);
      return true;
    case 234:
      finalCharArray = lowercaseCharArray.concat(numberCharArray, specialCharArray);
      return true;
    case 134:
      finalCharArray = uppercaseCharArray.concat(numberCharArray, specialCharArray);
      return true;
    case 124:
      finalCharArray = uppercaseCharArray.concat(lowercaseCharArray, specialCharArray);
      return true;
    case 123:
      finalCharArray = uppercaseCharArray.concat(lowercaseCharArray, numberCharArray);
      return true;
    case 34:
      finalCharArray = numberCharArray.concat(specialCharArray);
      return true;
    case 24:
      finalCharArray = lowercaseCharArray.concat(specialCharArray);
      return true;
    case 23:
      finalCharArray = lowercaseCharArray.concat(numberCharArray);
      return true;
    case 14:
      finalCharArray = uppercaseCharArray.concat(specialCharArray);
      return true;
    case 13:
      finalCharArray = uppercaseCharArray.concat(numberCharArray);
      return true;
    case 12:
      finalCharArray = uppercaseCharArray.concat(lowercaseCharArray);
      return true;
    case 1:
      finalCharArray = uppercaseChar;
      return true;
    case 2:
      finalCharArray = lowercaseCharArray;
      return true;
    case 3:
      finalCharArray = numberCharArray;
      return true;
    case 4:
      finalCharArray = specialCharArray;
      return true;
    default:
      window.alert("It appears you did not enter a valid response. Please try again.");
      var answ = window.confirm("Do you wish to continue with this password generator?");
      if (answ) {
        validateInputChar(); // call this same function again to give user another try 
      }
      break;
  }
  // if default case runs and user selects breaks and the validateInputChar() returns false
  return false;
}



function quitNow() {
  window.alert("Thank you for coming out. Please come back soon!");
}