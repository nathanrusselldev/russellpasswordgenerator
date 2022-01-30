// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables that define indexes that need to be concatenated together.

var upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseAlpha = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["~","!","#","$","%","^","&","*","(",")","+","-",";","@","_"];
var selection = [];

// Function that collects user input and concatenates the values. 

function generatePassword() {
  

  var passLength = prompt("Please enter a number of characters between 8 & 128.");

    if  (passLength < 8 || passLength > 128) {
        alert("You entered an invalid number of characters please start over.");
        return;
      };
    
  var upperCase = confirm("Do you want to use uppercase characters?")
    if (upperCase === true) {
      selection = selection.concat(upperCaseAlpha)
    };

  var lowerCase = confirm ("Do you want to use lowercase characters?"); 
    if (lowerCase === true) {
      selection = selection.concat(lowerCaseAlpha)
    };
  
  var numChar = confirm ("Do you want to use numerical characters?"); 
    if (numChar === true) {
      selection = selection.concat(numChars)
    };

  var specialChar = confirm ("Do you want to use special characters?"); 
    if (specialChar === true) {
      selection = selection.concat(specialChars)
    }
 

  // "Variable to create a bucket of all concatenated password values."  

  var basket = ""

  // For loop that takes password length and prompts and creates the password. 

  for ( i = 0; i < passLength; i++ ) {

    var randomNumber = Math.floor(Math.random()*selection.length);
    var randomCharacter = selection[randomNumber]
    basket = basket + randomCharacter

  }  
  // Console logs ensure all variables being logged/conatenated properly correctly. 
  
  console.log(basket)
  console.log(selection)
  console.log(passLength)
  console.log(passLength+upperCase)
  console.log(passLength+upperCase+lowerCase)
  console.log(passLength+upperCase+lowerCase+numChars)
  console.log(passLength+upperCase+lowerCase+numChars+specialChars)

  return basket;

  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// console logs showing all values passing

console.log(selection)
