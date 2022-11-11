// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomPass(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {

  var userInput = window.prompt("How long would you like your password to be?")
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
   window.alert("Please enter a valid number")
    return
  }

 if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
    return
  }


  var userNumbers = window.confirm("Would you like to include numbers?")
  var userSymbols = window.confirm("Would you like to include symbols?")
  var userLowercase = window.confirm("Would you like to include lowercase letters?")
  var userUppercase = window.confirm("Would you like to include uppercase letters?")

  var numberList = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]
  var symbolList = ["!", "?", "@", "#", "&", "."]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionCart = []

  if (userNumbers === true) {
    optionCart.push(numberList)
  }

  if (userSymbols === true) {
    optionCart.push(symbolList)
  }

  if (userLowercase === true) {
    optionCart.push(lowercaseList)
  }

  if (userUppercase === true) {
    optionCart.push(uppercaseList)
  }

  if (optionCart.length === 0) {
    optionCart.push(lowercaseList)
  }


  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomPass(optionCart)
    var randomChar = getRandomPass(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
