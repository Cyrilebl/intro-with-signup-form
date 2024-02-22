// First Name
function validatefirstName(firstName) {
  let firstNameRegex = /^[a-zA-Z\s-]+$/;
  return firstNameRegex.test(firstName);
}

// Last Name
function validatelastName(lastName) {
  let lastNameRegex = /^[a-zA-Z\s-]+$/;
  return lastNameRegex.test(lastName);
}

// E-mail
function validateEmail(email) {
  let emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  return emailRegex.test(email);
}

// Password
function validatePassword(password) {
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{10,}$/;
  return passwordRegex.test(password);
}

// Check input validation
function validateInput(inputElement, isValid) {
  let container = inputElement.parentElement;
  let errorIcon = container.querySelector(".error-icon");
  let validateSubscription = document.querySelector(".subscription");

  if (!isValid) {
    inputElement.style.border = "1px solid red";
    errorIcon.style.display = "block";
    validateSubscription.style.display = "none";
  } else {
    inputElement.style.border = "";
    errorIcon.style.display = "none";
    validateSubscription.style.display = "flex";
  }
}

// Check empty input
function checkField(inputElement) {
  let value = inputElement.value.trim();
  if (value === "") {
    throw new Error(`${inputElement.placeholder} cannot be empty`);
  }
  return true;
}

let form = document.querySelector("form");

// If input is empty
form.addEventListener("change", () => {
  let fields = [
    document.getElementById("firstName"),
    document.getElementById("lastName"),
    document.getElementById("email"),
    document.getElementById("password"),
  ];

  let errorText = document.querySelectorAll(".error-text");

  for (let i = 0; i < fields.length; i++) {
    try {
      checkField(fields[i]);
      errorText[i].style.display = "none";
    } catch (error) {
      errorText[i].style.display = "block";
      errorText[i].textContent = error.message;
    }
  }
});

// Submit and check validity
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  validateInput(firstName, validatefirstName(firstName.value));
  validateInput(lastName, validatelastName(lastName.value));
  validateInput(email, validateEmail(email.value));
  validateInput(password, validatePassword(password.value));
});
