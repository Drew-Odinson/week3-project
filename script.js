// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdfeghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#!$%^&*/?";





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", console.log(password)); {

function startPrompt() {
  let length = prompt("Enter a number between 8 and 128 for password lenght.", "10");
  var password = "";
  if (length >= 8 && length <= 128) {
    if (confirm("Do you want uppercase letters in your password?") == true) {
      password += upperCase;
    }
    if (confirm("Do you want lowercase letters in your password?") == true) {
      password += lowercase;
    }
    if (confirm("Do you want numbers in your password?") == true) {
      password += numbers;
    }
    if (confirm("Do you want symbols in your password?") == true) {
      password += Symbol;
    }
    else if (length < 8) {
      alert("Not enough characters in your password. Try again.");
      startPrompt();
    }
    else (length < 128); {
      alert("You have to many characters in your passwrord. Try again.");
      startPrompt();
    }
  }

  }
}
  





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



