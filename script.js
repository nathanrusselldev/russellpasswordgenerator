// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var upperCaseDelta = [""];
var numChars = [""];
var specialChars = [""];


function generatePassword() {
  

  var passLength = prompt("Please enter a number of characters between 8 & 128.");
  

    if  (passLength < 8 || passLength > 128) {
        alert("You entered an invalid number of characters please start over.");
        return;
      

      };
    
  var upperCase = confirm("Do you want to use uppercase characters?")
    if (upperCase === true) {
        
    };

  var lowerCase = confirm ("Do you want to use lowercase characters?"); {
    if (lowerCase === true) {

    };
  }
  var numChars = confirm ("Do you want to use numerical characters?"); {
    if (numChars === true) {

    };
  }
  var specialChars = confirm ("Do you want to use special characters?"); {
    if (specialChars === true) {
    }
  };


  
  console.log(passLength)
  console.log(passLength+upperCase)
  console.log(passLength+upperCase+lowerCase)
  console.log(passLength+upperCase+lowerCase+numChars)
  console.log(passLength+upperCase+lowerCase+numChars+specialChars)


  }









  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






