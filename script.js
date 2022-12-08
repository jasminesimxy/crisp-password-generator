var passwordLength = 8;
var choiceArray = [];

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
var specialCharArray =['~','`','!','@', '#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']', '|', ':',';','"','<',',','.','>', '?','/'];
var numericArray=['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   var bingoPrompts = getPrompts();    // return eithertrue or false 
   var passwordText = document.querySelector("#password");

   if (bingoPrompts) {
    var updatedPassword = generatePassword();
    passwordText.value = updatedPassword;
   } else {
    passwordText.value = "";
   }
  }


 
// I would generatePasswords based on the prompts
function generatePassword() {
  var password = "" ;  // this is an empty string
  for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[randomIndex];
}
return password;
}

function getPrompts() {
  choiceArray =[]; //this is empty [] b/c this will reset my arrays everytime the question is asked

// 5 prompts that i need
   passwordLength = parseInt(prompt("Your password must be within the range of 8-128 characters. How many characters would you like your password to be ? "));

   if(isNaN(passwordLength) || passwordLength < 8 || passwordLength  > 128 ) {
    alert("Please re-type your password as number digits between 8-128. Please try again ^_^ . ");
    return false;
   }

   if (confirm ("Wanna add some lowercase letters in your password? ")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
   }
  
    if (confirm ("Wanna add some uppercase letters in your password? ")) {
      choiceArray = choiceArray.concat(upperCaseArray);
    }

      if (confirm ("Wanna add some numbers in your password? ")) {
        choiceArray = choiceArray.concat(specialCharArray);
      }
        
        if (confirm ("Wanna add some crisp special characters in your password? ")) {
          choiceArray = choiceArray.concat(numericArray);
        }

      return true;
    
   }

  