var generateBtn = document.querySelector("#generate");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#!$%^&*/?";



generateBtn.addEventListener("click", writePassword);



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




function generatePassword() {
  let length = prompt("Enter a number between 8 and 128 for password length.", "10");
  var password = "";

  if (length >= 8 && length <= 128) {
    if (confirm("Do you want uppercase letters in your password?")) {
      password += upperCase;
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      password += lowerCase;
    }
    if (confirm("Do you want numbers in your password?")) {
      password += numbers;
    }
    if (confirm("Do you want symbols in your password?")) {
      password += symbols;
    }

    if (password === "") {
      alert("You must select at least one character type for the password.");
      return generatePassword(); 
    }

    let generatedPassword = "";

    for (var i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * password.length);
      generatedPassword += password.charAt(randomNumber);
    }

    console.log(generatedPassword);
    return generatedPassword;
  } else {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return generatePassword(); 
  }
}


