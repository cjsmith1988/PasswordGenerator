//I ran out of time this week

// Assignment code here
var passLength = "";
var specCharConf = "";
var numConf = "";
var numAmount = "";
var upperCharConf = "";
var upperCharAmount = "";

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  
    return value;
};
var passLengthFun = function() {
    passLength = window.prompt("How long does the password need to be? (8 to 128)");
    passLength = parseInt(passLength);
    if (passLength === "" || passLength === null || passLength < 8 || passLength > 128) {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return passLengthFun();
    }
    return passLength;
}
var specCharConfFun = function() {
    specCharConf = window.prompt("Does it need to have special characters? Reply Yes or No");
    if (specCharConf === "" || specCharConf === null || !isNaN(specCharConf)) {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return specCharConfFun();
    }
    specCharConf = specCharConf.toLowerCase();
    if (specCharConf === "yes" || specCharConf === "no") {
        return specCharConf
    } else {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return specCharConfFun();
    }
}
var numConfFun = function() {
    numConf = window.prompt("Does it need to have special characters? Reply Yes or No");
    if (numConf === "" || numConf === null || !isNaN(numConf)) {
        window.prompt("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return numConfFun();
    }
    numConf = numConf.toLowerCase();
    if (numConf === "yes" || numConf === "no") {
        return numConf;
    } else {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return numConfFun();
    }
}
var numAmountFun = function() {
    numAmount = window.prompt("How many numbers?");
    numAmount = parseInt(numAmount);
    if (numAmount === "" || numAmount === null) {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return numAmountFun();
    }
    return numAmount;
}
var upperCharConfFun = function() {
    upperCharConf = window.prompt("Does it need to have Uppercase characters? Reply Yes or No");
    if (upperCharConf === "" || upperCharConf === null || !isNaN(upperCharConf)) {
        window.prompt("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return upperCharConfFun();
    }
    numConf = upperCharConf.toLowerCase();
    if (upperCharConf === "yes" || upperCharConf === "no") {
        return upperCharConf;
    } else {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return upperCharConfFun();
    }
}
var upperCharAmountFun = function() {
    upperCharAmount = window.prompt("How many Uppercase characters?");
    upperCharAmount = parseInt(upperCharAmount);
    if (upperCharAmount === "" || upperCharAmount === null) {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return upperCharAmountFun();
    }
    return upperCharAmount;
}
var getUserInput = function() {
    
    passLengthFun();
    specCharConfFun();
    numConfFun();
    numAmountFun();
    upperCharConfFun();
    upperCharAmountFun();

};

var password;

var alphChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["!","”","#","$","%","&","’","(",")","*","+","-",":",";","<","=",">","?","@","[", "'\'" ,"]","^","_","`","{","|","}","~"];
for (i = 0; i <= passLength; i++) {
    var password = alphChar[randomNumber(0, alphChar.length-1)];
}

getUserInput()

//console.log(alphChar);
//console.log(specChar);

console.log(passLength);
console.log(specCharConf);
console.log(numConf);
console.log(numAmount);
console.log(upperCharConf);
console.log(upperCharAmount);

console.log(password);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
