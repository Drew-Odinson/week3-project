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


generateBtn.addEventListener("click", writePassword);

function generatePassword() {
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
      password += symbols;
    }
    else if (length < 8) {
      alert("Not enough characters in your password. Try again.");
      generatePassword();
    }
    else if (length > 128) {
      console.log(password);
      alert("You have to many characters in your passwrord. Try again.");
      generatePassword();
    }



    // console.log(password);
    // return password;
  }
  for (var i = 0; i <= generatePassword; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += generatePassword.substring(randomNumber, randomNumber +1);
     }
     document.getElementById("password").value = password;
    
      console.log(password);
    return password;

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