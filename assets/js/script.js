// First Name & Last Name
function isName(name) {
  return /^[a-zA-Z\s-]+$/.test(name);
}

// E-mail
function isEmail(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email);
}

// Password
function isPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(
    password
  );
}

function setSuccessFor(input) {
  const container = input.parentElement;
  const errorText = container.querySelector(".error-text");

  errorText.innerText = "";
  container.className = "container success";
}

function setErrorFor(input, message) {
  const container = input.parentElement;
  const errorText = container.querySelector(".error-text");

  errorText.innerText = message;
  container.className = "container error";
}

function checkInputs() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (firstName.value.trim() === "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else if (!isName(firstName.value.trim())) {
    setErrorFor(
      firstName,
      "Invalid first name. Only letters, spaces, and hyphens."
    );
  } else {
    setSuccessFor(firstName);
  }

  if (lastName.value.trim() === "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else if (!isName(lastName.value.trim())) {
    setErrorFor(
      lastName,
      "Invalid last name. Only letters, spaces, and hyphens."
    );
  } else {
    setSuccessFor(lastName);
  }

  if (email.value.trim() === "") {
    setErrorFor(email, "Email Address cannot be empty");
  } else if (!isEmail(email.value.trim())) {
    setErrorFor(email, "Looks like this is not an email.");
  } else {
    setSuccessFor(email);
  }

  if (password.value === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (!isPassword(password.value)) {
    setErrorFor(
      password,
      "Password must have : 8 characters, 1 uppercase, 1 number, 1 special character."
    );
  } else {
    setSuccessFor(password);
  }

  if (
    isName(firstNameValue) &&
    isName(lastNameValue) &&
    isEmail(emailValue) &&
    isPassword(passwordValue)
  ) {
    const validateSubscription = document.querySelector(".subscription");
    validateSubscription.style.display = "flex";
  }
}

const form = document.querySelector("form");

// Submit and check inputs
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
