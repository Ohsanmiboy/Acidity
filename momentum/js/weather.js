const API_KEY = "b510c93096ecbe18ea899032322843b0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-type");
      const city = document.querySelector("#weather-location");
      const icon = document.querySelector("#icon");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
