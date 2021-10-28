// Assignment code here


// Get references to the #generate element
// 1. Prompt the user for the password criteria
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  //Create an array of all lowercase alphabet
  var lowercaseArray =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Create an array of all uppercase alphabet
  var uppercaseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  //Create an array of all numbers
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //Create an array of all special characters
  var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

  var selectedArray = [];
  var passwordLength = getPasswordLength();

  var passwordGeneration = false
  // User should choose at least one character type from above arrays
  while (passwordGeneration == false) {
    var lowerCase = getSelection("lowercase")
    var uppercase = getSelection("uppercase")
    var numerals = getSelection("numerals")
    var special = getSelection("special")
    if ((lowerCase) || (upperCase) || (numerals) || (special)) {
      passwordGeneration = true;
    } else {
      window.alert("WARNING! You must select at least one character type")
    }
  }
  // Following if statments determine the choices of the user and then affixes thme to the array i created
  //  1a. Lowercase, Uppercase, special Characters

  if (lowerCase) {
    selectedArray = selectedArray.concat(lowercaseArray);
  }
  if (uppercase) {
    selectedArray = selectedArray.concat(uppercaseArray);
  }
  if (numerals) {
    selectedArray = selectedArray.concat(numbersArray);
  }
  if (special) {
    selectedArray = selectedArray.concat(specialCharactersArray);
  }


  var passwordString = "";
  // This for loop will take the affixed array and randomly select values from it, then affix the values to a string and finally generate a random password
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }

  return passwordString;
}

//  1b. Password length 8 <  128
function getPasswordLength() {
  var userSelection = 0;
  while ((userSelection < 8) || (userSelection > 128)) {
    userSelection = parseInt(window.prompt("Please enter the number of characters between 8 and 128"));
    // Generator checks to make sure correct numerical value is entered and not a letter
    if (isNaN(userSelection)) {
      // This resets loop value to 0 if user entered anything other than a numeral
      userSelection = 0;
    }
  }

  return userSelection;
}
// 2. Validate the input. 

// Function simplifies repetitive code. * Been working on improving in this
function getSelection(currentSelection) {
  var userSelection = "a",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentSelection));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  //this loop makes sure the user enters valid option
  while (userSelection = "a") {
    userSelection = (window.prompt(messagePrompt));

    userSelection = userSelection.toLowerCase();
    if (userSelection == "y") {
      return true;
    } else if (userSelection == "n") {
      return false;
    }
  }
}
// 3. Generate password based on criteria
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // 4. Display password on the page

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MY psuedocode-

// 1. Prompt the user for the password criteria
//  a. Password length 8 <  128
//   b. Lowercase, Uppercase, special Characters
// 2. Validate the input. 
// 3. Generate password based on criteria



