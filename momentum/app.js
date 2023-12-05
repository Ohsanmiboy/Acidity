const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseleave() {
  h1.innerText = "mouse is gone!";
}

function handleleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD!");
}
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
