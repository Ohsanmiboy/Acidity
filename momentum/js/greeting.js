const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const logoutKey = document.querySelector("#log-out");

function onLoginsubmit(event) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
  });
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  paintGreetings();
}

logoutKey.addEventListener("submit", (event) => {
  if (savedUsername === null) {
    logoutKey.cassList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY, loginInput.value);
  } else {
    logoutKey.cassList.add(HIDDEN_CLASSNAME);
  }
});
