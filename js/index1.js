const form = document.querySelector("form");

email = form.querySelector("#email");
image = form.querySelector("#img");
errorTxt = form.querySelector("#errortxt");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail();

  email.onkeyup = () => {
    checkEmail();
  };

  function checkEmail() {
    if (emailValue === "") {
      email.classList.add("error");
      img.classList.add("img-error");
      errorTxt.innerText = "Please enter an email address";
    } else if (!emailValue.match(pattern)) {
      email.classList.add("error");
      img.classList.add("img-error");
      errorTxt.innerText = "Please provide a valid email";
    } else {
      email.classList.remove("error");
      img.classList.remove("img-error");
      errorTxt.innerText = "";
    }
  }
});
