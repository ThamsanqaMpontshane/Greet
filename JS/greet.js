var message = document.getElementById("message");
var greetingsCounter = 0;
var h3 = document.getElementsByTagName("h3")[0];
let storage = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : {};
let salute = greet(storage);
h3.innerHTML = salute.forCounter();

const greetingMsg = () => {
  var checkedRadioBtn = document.querySelector("input[name='language']:checked" );
  var username = document.getElementById("username").value;
  var upperCaseName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

if (upperCaseName && checkedRadioBtn) {
if (/^[a-zA-Z]+$/.test(upperCaseName)) {
    if (salute.duplicates(upperCaseName)) {
        message.innerHTML = "You Have Already Been Greeted" + " " + upperCaseName;
    } else {
    message.innerHTML = salute.greetingMessage(upperCaseName,checkedRadioBtn.value);
    var names = JSON.stringify(storage);
    localStorage.setItem("names", names);
    h3.innerHTML = salute.forCounter();
    }
    }
    else {
    message.innerHTML = "Please enter correct name!";
    }
    }  
    else {
    message.innerHTML = salute.error(upperCaseName, checkedRadioBtn);
  }
};

function clearLocalStorage(event) {
  event.preventDefault();
  localStorage.clear();
  location.reload();
}