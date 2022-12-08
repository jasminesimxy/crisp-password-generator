var passwordLength = 8;
var choiceArray = [ ];

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
var specialCaseArray =['~','`','!','@', '#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']', '|', ':',';','"','<',',','.','>', '?','/'];
var numericArray=['1','2','3','4','5','6','7','8','9','0'];

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
// i would generatePasswords based on the prompts
}

function getPrompts() {

   // prompt - character length
   passwordLength = parseInt(prompt("Your password must be within the range of 8-128 characters. How many characters would you like your password to be ? "));

   // if user enter non-interger then this would be false. //* NaN = not a number 
   if(isNaN(passwordLength) || passwordLength < 8 || passwordLength  > 128 ) {
    aler("Please re-type your password as number digits between 8-128. Please try again ^_^ . " );
    return false;
   }

   if (confirm ("Wanna add some lowercase letters in your password? ")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  
    if (confirm ("Wanna add some uppercase letters in your password? ")) {
      choiceArray = choiceArray.concat(lowerCaseArray);

      if (confirm ("Wanna add some numbers in your password? ")) {
        choiceArray = choiceArray.concat(lowerCaseArray);
        
        if (confirm ("Wanna add some crisp special characters in your password? ")) {
          choiceArray = choiceArray.concat(lowerCaseArray);
      

    
    
   }








}

   
 








 















// prompt: Your password must be within the range of 8-128 characters. How many characters would you like your password to be ?
// alert: if user enters a length <8 , then alert the user this 'Ooops.Please enter a password more than 7 characters.'
// alert: if user enter a length number >128, then alert the user this 'Ooops, that is too many. Please enter a password less than 128 characters'
// add confirm box pop up
// confirm (ok) boolean (true)
// confirm (cancel) boolean  (false)

function writePassword() {
   

