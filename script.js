// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;

}
const generatePassword = () => {
    let passwordLength = prompt("Enter Password Length");
    let validCharacter = "";
    let passwordMain = "";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let specialCharacters = "!@#$%^&*_+~-"
    let upperCaseNumber = -1;
    let lowerCaseNumber = -1;
    let specialCharacterNumber = -1;

    while(passwordLength > 128 || passwordLength < 8){
        passwordLength = prompt("Enter Valid Password Length 8-128")
    }
    if(confirm("Do you want lowercase letters in your password")){
        validCharacter = validCharacter.concat(lowerCase);
        lowerCaseNumber = Math.floor(Math.random() * passwordLength)
    }
    if(confirm("Do you want uppercase letters in your password"
    )){
        validCharacter = validCharacter.concat(upperCase);
        upperCaseNumber = Math.floor(Math.random() * passwordLength)
        while(upperCaseNumber === lowerCaseNumber){
            upperCaseNumber = Math.floor(Math.random() * passwordLength)
        }
    }

    if(confirm("Do you want to use Special Characters")){
        validCharacter = validCharacter.concat(specialCharacters);
        specialCharacterNumber = Math.floor(Math.random() * passwordLength)
        while(specialCharacterNumber === lowerCaseNumber || specialCharacterNumber === upperCaseNumber){
            specialCharacterNumber = Math.floor(Math.random() * passwordLength)
        }
    }
    for(let i = 0; i < passwordLength; i++){
        let randomLower = Math.floor(Math.random() * 26);
        let randomUpper = Math.floor(Math.random() * 26);
        let randomSpecial = Math.floor(Math.random() * 12)
        if(i === lowerCaseNumber){
            passwordMain += lowerCase.charAt(randomLower)
        }
        else if(i === upperCaseNumber){
            passwordMain += upperCase.charAt(randomUpper)
        }
        else if(i === specialCharacterNumber){
            passwordMain += specialCharacters.charAt(randomSpecial)
        }
        else{
            let randomLetter = Math.floor(Math.random() * validCharacter.length)
            passwordMain += validCharacter.charAt(randomLetter);
        }
    }
    return passwordMain;
}
function copyPass() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied new Password: " + copyText.value);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
