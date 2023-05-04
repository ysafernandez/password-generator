// Assignment code here
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"]
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "/"]
var options = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var finalPass = ""
  var characterSelection = prompt("Length of password characters: ");
  if (characterSelection < 8) {
    prompt("Minimum character length is 8. Please try again.");
    generatePassword()
  } else if (characterSelection > 128) {
    prompt("Maxiumum character length is 128. Please try again. ");
    generatePassword()
  } else {
    alert(("Great! Your password will have this amount of characters: " + characterSelection))
  }

  var lowercaseAnswer = confirm("Include lowercase?");
  if (lowercaseAnswer) {
    alert("Noted! Your password will include lowercase letters.");
    options = options.concat(lowerArr)
  }

  var uppercaseAnswer = confirm("Include uppercase?");
  if (uppercaseAnswer) {
    alert("Noted! Your password will include uppercase letters.");
    options = options.concat(upperArr)
  }

  var numericAnswer = confirm("Include numbers?");
  if (numericAnswer) {
    alert("Noted! Your password will include numbers.");
    options = options.concat(numArr)
  }

  var specialAnswer = confirm("Include special character?");
  if (specialAnswer) {
    alert("Noted! Your password will special characters.");
    options = options.concat(specialArr)
  }
  console.log(options)
  for (var i = 0; i < characterSelection; i++) {
    finalPass = finalPass + options[Math.floor(Math.random() * options.length)]
  }
  return finalPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);