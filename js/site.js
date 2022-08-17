//Get the String input
//Controller function
function getValues() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayReverse(revString);
}
//Reverse the String
//Logic Function
function reverseString(userString) {
    let revString = [];

    for (let i = userString.length - 1; i >=0; i--) {
        revString += userString[i];
    }
    return revString;
}
//Display the message
//View Function
function displayReverse(revString) {
    document.getElementById("msg").innerHTML = `You String reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}