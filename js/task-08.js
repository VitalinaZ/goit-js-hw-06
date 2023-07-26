const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password }
  } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return console.dir("Please fill in all the fields!");
    }
    console.dir(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};
