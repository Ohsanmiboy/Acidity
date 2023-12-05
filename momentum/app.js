const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
function onLoginsubmit(event) {
  event.preventDefault();
  console.log(event);
}
function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}
loginForm.addEventListener("submit", onLoginsubmit);

link.addEventListener("click", handleLinkClick);
