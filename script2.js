var initialsInput = document.querySelector("#initials");
var emailInput = document.querySelector("#email");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");
var userEmailSpan = document.querySelector("#user-email");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    initials: initialsInput.value.trim(),
    email: emailInput.value.trim(),
  };

  console.log(user);
  
  // validate the fields
  if (user.initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userInitialsSpan.textContent = lastUser.initials;
    userEmailSpan.textContent = lastUser.email;
  }
});
