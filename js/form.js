const form = document.getElementsByTagName("form")[0];

form.setAttribute("novalidate", "");

form.addEventListener("submit", (event) => {
  if (
    !fName.validity.valid ||
    !lName.validity.valid ||
    !email.validity.valid ||
    !password.validity.valid
  ) {
    showError();
    event.preventDefault();
  }
});

const fName = document.getElementById("fname");

const lName = document.getElementById("lname");

const email = document.getElementById("email");

const password = document.getElementById("password");

function showError() {
  if (!fName.validity.valid) {
    if (fName.validity.valueMissing) {
      alert("First Name cannot be empty");
    }
    fNameError.classList.toggle("active", true);
    fName.classList.toggle("active", true);
  }

  if (!lName.validity.valid) {
    if (lName.validity.valueMissing) {
      alert("Last Name cannot be empty");
    }
    lNameError.classList.toggle("active", true);
    lName.classList.toggle("active", true);
  }

  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      alert("Email cannot be empty");
    }
    emailError.classList.toggle("active", true);
    email.classList.toggle("active", true);
  }

  if (!password.validity.valid) {
    if (password.validity.valueMissing) {
      alert("Password cannot be empty");
    }
    passwordError.classList.toggle("active", true);
    password.classList.toggle("active", true);
  }
}
