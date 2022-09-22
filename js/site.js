//Get user value from the input field
function getValue() {

    //make sure the alert is hidden
    document.getElementById("alert").classList.add("invisible");

    //get user string from the input field
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkPalindrome(userString);

    //display the result
    displayMessage(returnObj);
}

//Check if the string is a palindrome.
function checkPalindrome(userString) {

    let revString = [];
    let returnObj = {};

    //convert to lower case
    userString = userString.toLowerCase();

    //remove all special characters
    let regex = /[^a-z0-9+]+/gi;
    userString = userString.replace(regex, "");

    returnObj.sanitizedUserString = userString;
    
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome.";
    } else {
        returnObj.msg = "Sorry, that is not a palindrome.";
    }
    returnObj.reversed = revString;

    return returnObj;
}

//Display a message to the user
function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `You entered: ${returnObj.sanitizedUserString} and the reverse is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}