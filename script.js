// Assignment code here



// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

function generatePassword () {
    var characterSelection = window.prompt("Length of password characters: ");
if (characterSelection < 8) {
  window.prompt ("Minimum character length is 8. Please try again.");
} else if  (characterSelection > 128) {
  window.prompt ("Maxiumum character length is 128. Please try again. ");
} else if  (characterSelection > 128) {
  window.prompt ("Maxiumum character length is 128. Please try again. ");
} else { 
  window.prompt (("Great! Your password will have this amount of characters:"), characterSelection)
}

  var lowercaseAnswer = window.prompt("Include lowercase: yes or no"); 
if (lowercaseAnswer === "yes") {
  alert ("Noted! Your password will include lowercase letters."); 
} else if (lowercaseAnswer === "no") { 
  alert ("Noted! Your password will NOT include lowercase letters.");
} else {
  window.prompt ("Please input 'yes' or 'no' to continue.")
  return (lowercaseAnswer)
}

  var uppercaseAnswer = window.prompt("Include uppercase: yes or no"); 
if (uppercaseAnswer === "yes") {
  alert ("Noted! Your password will include uppercase letters."); 
} else if (uppercaseAnswer === "no") { 
  alert ("Noted! Your password will NOT include upperrcase letters.");
} else {
  window.prompt ("Please input yes or no to continue.")
  return (uppercaseAnswer)
}

  var numericAnswer = window.prompt("Include numbers: yes or no"); 
if (numericAnswer === "yes") {
  alert ("Noted! Your password will include numbers."); 
} else if (numericAnswer === "no") { 
  alert ("Noted! Your password will NOT include numbers.");
} else {
  window.prompt ("Please input yes or no to continue.")
  return (numericAnswer)
}

  var specialAnswer = window.prompt ("Include special character: yes or no"); 
if (specialAnswer === "yes") {
  alert ("Noted! Your password will special characters."); 
} else if (specialAnswer === "no") { 
  alert ("Noted! Your password will NOT include special characters.");
} else {
  window.prompt ("Please input yes or no to continue.")
  return (specialAnswer)
}
}
// validate input 


/* declare password  
var declarePassword= function(generatePassword) {
if (specialAnswer, numericAnswer, uppercaseAnswer, lowercaseAnswer === "yes") 
return 
}*/

/*
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/.,'"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);