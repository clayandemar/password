// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lengthResults = parseInt(getCharacterLength());
  var lowerCaseResult = getLowerCase();
  var upperCaseResult = getUpperCase();
  var numberResult = getNumber();
  var specialCharacterResult = getSpecialCharacters();
  var stringPassword = "";
  for (let i = 0; i < lengthResults; i++) {
    var characterResult = getRandomCharacter(lowerCaseResult, upperCaseResult, numberResult, specialCharacterResult)
    stringPassword = characterResult + stringPassword;
  }
  if (lengthResults < 8 || lengthResults > 128)
  stringPassword = "Number isn't between 8 and 128"
  return stringPassword

}

function getRandomCharacter(lowerCaseParameter, upperCaseParameter, numberParameter, specialCharacterParameter) {
  var characters = [];
  if (lowerCaseParameter === "Y" || lowerCaseParameter === "y")
    characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  if (upperCaseParameter === "Y" || upperCaseParameter === "y")
    characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  if (numberParameter === "Y" || numberParameter === "y")
    characters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  if (specialCharacterParameter === "Y" || specialCharacterParameter === "y")
    characters.push("!", "@", "#", "$", "%", "&", "+", "?")
  var randomNumber = Math.round(Math.floor(Math.random() * characters.length));
  return characters[randomNumber];

}


function getCharacterLength() {
  var lengthResult = prompt("How long do you want your password? (8-128 characters) [type numeric value]");
  return lengthResult;
}

function getLowerCase() {
  var lowerCaseResult = prompt("Would you like lowercase letters in your password? (Y/N)");
  return lowerCaseResult;
}

function getUpperCase() {
  var upperCaseResult = prompt("Would you like uppercase letters in your password? (Y/N)");
  return upperCaseResult;
}

function getNumber() {
  var numberResult = prompt("Would you like numbers in your password? (Y/N)");
  return numberResult;
}

function getSpecialCharacters() {
  var specialCharacterResult = prompt("Would you like special characters in your password? (ex. !@#$) [Y/N]");
  return specialCharacterResult;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
