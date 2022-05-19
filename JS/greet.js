var message = document.getElementById("message");
var greetingsCounter = 0;
var nameMap = {};

function greeting(event) {
    event.preventDefault();    

    var radioEnglish = document.getElementById("english");
    var radioXhosa = document.getElementById("xhosa");
    var radioAfrikaans = document.getElementById("afrikaans");


    var username = document.getElementById("username").value;
    var upperCaseName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

    if (!upperCaseName == "" && upperCaseName != null && upperCaseName != undefined && upperCaseName != " " && upperCaseName != "  " && upperCaseName.match(/^[a-zA-Z]+$/)) {
        if (nameMap[upperCaseName] === undefined) {
            nameMap[upperCaseName] = 1;
        }
    }

    if (nameMap !== undefined) {
        var names = JSON.stringify(nameMap);
        localStorage.setItem("names", names);
    }



    if (radioEnglish.checked && upperCaseName !== "" && isNaN(upperCaseName) && upperCaseName.match(/^[a-zA-Z]+$/)) {
        var fullName = "Hello " + upperCaseName;
        message.innerHTML = fullName;
    }
    else if (radioXhosa.checked && upperCaseName !== "" && isNaN(upperCaseName) && upperCaseName.match(/^[a-zA-Z]+$/)) {
        var fullName = "Molo " + upperCaseName;
        message.innerHTML = fullName;
    }
    else if (radioAfrikaans.checked && upperCaseName !== "" && isNaN(upperCaseName) && upperCaseName.match(/^[a-zA-Z]+$/)) {
        var fullName = "Hallo " + upperCaseName;
        message.innerHTML = fullName;
    }
    else if (!upperCaseName.match(/^[a-zA-Z]+$/)) {
        message.innerHTML = "Please enter a valid name";
    }
    else if (upperCaseName == "") {
        message.innerHTML = "Please enter a name";
    }
    else if (radioEnglish.checked && upperCaseName == "") {
        message.innerHTML = "Please enter a name";
    }
    else if (radioXhosa.checked && upperCaseName == "") {
        message.innerHTML = "Please enter a name";
    }
    else if (radioAfrikaans.checked && upperCaseName == "") {
        message.innerHTML = "Please enter a name";
    }
    //if uppercasename has text and radio button is not selected say "please select language"
    else if(radioEnglish.checked === false && upperCaseName !== ""){
        message.innerHTML = "Please select language"
    }
    document.getElementById("username").value = "";
    var h3 = document.getElementsByTagName("h3")[0];
    h3.innerHTML = Object.keys(nameMap).length;
}

function clearLocalStorage(event) {
    event.preventDefault();
    localStorage.clear();
    var h3 = document.getElementsByTagName("h3")[0];
    h3.innerHTML = 0;
    message.innerHTML = "";
    var radioEnglish = document.getElementById("english");
    var radioXhosa = document.getElementById("xhosa");
    var radioAfrikaans = document.getElementById("afrikaans");
    radioEnglish.checked = false;
    radioXhosa.checked = false;
    radioAfrikaans.checked = false;
    location.reload();
}

