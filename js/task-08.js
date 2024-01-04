const loginFormHtml = document.querySelector(".login-form");

loginFormHtml.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailFormHtml = loginFormHtml.elements.email.value;
  const passwordFormHtml = loginFormHtml.elements.password.value;

  if (!emailFormHtml || !passwordFormHtml) {
    alert("Uzupełnij wszystkie pola.");
    return;
  }

  const formData = {
    email: emailFormHtml,
    password: passwordFormHtml,
  };

  console.log(formData);

  loginFormHtml.reset();
});