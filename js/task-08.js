const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
 (`Login: ${email.value}, Password: ${password.value}`);
    const formSubmit = {
        email:email.value,
        password:password.value,
    };
 console.dir(formSubmit);
  event.currentTarget.reset();
  
};
