// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
 
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  if (password) {
    passwordText.value = password;
  } else
  {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Buckets of character choices
let capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let choiceNum = ['0','1','2','3','4','5','6','7','8','9'];
let specialSymbol = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]; 




// Function to generate password
function generatePassword() {

  let text = "";
  let consolidateArray = [];

  // getting input from user
  let length = parseInt(prompt("How long will your password be? (8-128)"));
  
  // password length must be a number between 8 to 128.
  if (isNaN(length)) {
    return alert("It has to be a number. Please try again!!");
  } else if (length < 8 || length > 128) {
    return alert("Please select number between 8 and 128. Please try again!!");
  };
  
  // getting combinations of characters included when generating password
  // User confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  let lowercase = "Include lowercase letters?";
  selectLower = confirm(lowercase);

  let uppercase = "Will you include uppercase letters?";
  selectCaptial = confirm(uppercase);

  let numbers = "Will you include numbers?";
  selectNumb = confirm(numbers);

  let symbols = "And will you use special symbols?";
  selecetSymbols = confirm(symbols);


  if (!selectLower && !selectCaptial && !selectNumb && !selecetSymbols) {
    alert("You must have at least one character set. Please try again!! ");
    consolidateArray = [];
    return;
  } 
  else
  {
    
    if (selectLower == true) {
      consolidateArray = consolidateArray.concat(smallLetters);
    }

    if (selectCaptial == true) {
      consolidateArray = consolidateArray.concat(capitalLetters);
    }

    if (selectNumb == true) {
      consolidateArray = consolidateArray.concat(choiceNum);
    }

    if (selecetSymbols == true) {
      consolidateArray = consolidateArray.concat(specialSymbol);
    }

  }

  // Building the password for user
  for (let i = 0; i < length; i++)
  text += consolidateArray[Math.floor(Math.random() * consolidateArray.length)];
  return text;

}

