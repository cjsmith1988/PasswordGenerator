//I ran out of time this week

// Assignment code here
let password = [];
var usedAlready = 0;
var alphChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["!","”","#","$","%","&","’","(",")","*","+","-",":",";","<","=",">","?","@","[", "'\'" ,"]","^","_","`","{","|","}","~"];
var passLength = 0;
var specCharConf = "";
var specCharAmount = 0;
var numConf = "";
var numAmount = "";
var upperCharConf = "";
var upperCharAmount = "";
var usedAlready = 0;
var specCharCount = 0;
var numCount = 0;
var upperCharCount = 0;
var generatedPassword = "";

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
var specCharAmountFun = function() {
    specCharAmount = window.prompt("How many special characters?");
    specCharAmount = parseInt(specCharAmount);
    if (specCharAmount === "" || specCharAmount === null) {
        window.alert("You didn't enter a valid choice, try again!");
        // use return to call it again and stop the rest of this function from running
        return specCharAmountFun();
    }
    return specCharAmount;
}
var numConfFun = function() {
    numConf = window.prompt("Does it need to have any numbers? Reply Yes or No");
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
    //get all the user custom criteria for password
    passLengthFun();
    specCharConfFun();
    if (specCharConf === "yes") {
        specCharAmountFun();
    }
    numConfFun();
    if (numConf === "yes") {
        numAmountFun();
    }
    upperCharConfFun();
    if (upperCharConf === "yes") {
        upperCharAmountFun();
    }
};
var generatePassword = function() {
    getUserInput();
    for (var i = 0; i < passLength; i++) {
        //password.push(i) == i;
        //password[i] = alphChar[randomNumber(0, alphChar.length-1)];
        password[i] = "tbd"
    }
    //get random integer from 0 to passLength-1
    //if its not 'tbd' then fill out
    //first check special char
    //second check num
    //third check uppercase
    for (var i = 0; i < passLength; i++) {
        usedAlready = 0;
        
        while (usedAlready == 0) {
            var randIndex = randomNumber(0, passLength);
            if (password[randIndex] === "tbd") {
                if (specCharCount < specCharAmount) {
                    password[randIndex] = specChar[randomNumber(0, specChar.length-1)];
                    specCharCount++;
                } else if (numCount < numAmount) {
                    password[randIndex] = randomNumber(0, 10)
                    numCount++;
                } else if (upperCharCount < upperCharAmount) {
                    password[randIndex] = alphChar[randomNumber(0, alphChar.length-1)].toUpperCase();
                    upperCharCount++
                } else {
                    password[randIndex] = alphChar[randomNumber(0, alphChar.length-1)];
                }
                usedAlready = 1;
            } 
        }
    }
    for (var i = 0; i < password.length; i++) {
        generatedPassword = generatedPassword + password[i];
    }
    return generatedPassword;
}


console.log(generatedPassword);


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
