const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginsubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}

loginForm.addEventListener("submit", onLoginsubmit);

onLoginsubmit();
