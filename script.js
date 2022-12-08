var characterLength = 8;
var choiceArray = [ ];

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
var specialCaseArray =['~','`','!','@', '#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']', '|', ':',';','"','<',',','.','>', '?','/'];
var numericArray=['1','2','3','4','5','6','7','8','9','0']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}

function generatePassword() {

}








 


















// create variables for lowercaseChars, uppercaseChars, numericalChars, and specialChars
var lowercaseChar= "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar="0123456789";
var specialChar= ";//"!\"#$%&'()*+,-./:;<=>?@[]^_`{}~";


// prompt: Your password must be within the range of 8-128 characters. How many characters would you like your password to be ?
// alert: if user enters a length <8 , then alert the user this 'Ooops.Please enter a password more than 7 characters.'
// alert: if user enter a length number >128, then alert the user this 'Ooops, that is too many. Please enter a password less than 128 characters'
// add confirm box pop up
// confirm (ok) boolean (true)
// confirm (cancel) boolean  (false)

function writePassword() {
   var passwordLength = prompt("Your password must be within the range of 8-128 characters. How many characters would you like your password to be ? ");

   // if user enter length < 8, alert ..
   if (passwordLength < 8) {
    alert("Ooops.Please enter a password more than 7 characters");
    return
   }

