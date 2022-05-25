else if (!upperCaseName.match(/^[a-zA-Z]+$/)) {
    var njerr = checkedRadioBtn.value
    message.innerHTML = salute.error(upperCaseName == "", njerr == false);
}
    //     //message.innerHTML = salute.greetingMessage("", "English");
    // } else if (upperCaseName == "") {
    //     message.innerHTML = "Please enter a name";
    //     //message.innerHTML = salute.greetingMessage("", "English");
    // } else if (radioEnglish.checked && upperCaseName == "") {
    //     message.innerHTML = "Please enter a name";
    //     //message.innerHTML = salute.greetingMessage("", "English");
    // } else if (radioXhosa.checked && upperCaseName == "") {
    //     message.innerHTML = "Please enter a name";
    //     //message.innerHTML = salute.greetingMessage("", "English");
    // } else if (radioAfrikaans.checked && upperCaseName == "") {
    //     message.innerHTML = "Please enter a name";
    // } else if (radioEnglish.checked === false && upperCaseName !== "") {
    //     message.innerHTML = "Please select language"
    // }