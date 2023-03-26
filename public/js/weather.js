const form = document.querySelector(".formToSend");
const input = document.getElementById("inputform");
const btn = document.getElementById("btnForm");
window.addEventListener("load", () => input.value = "");
const Temp = document.querySelector(".temp");
const CityClass = document.querySelector(".cityClass");
const Clouds = document.querySelector(".cloudy");
const Humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".wind");




btn.addEventListener("click", () => {

form.addEventListener("submit", (e) => {
    e.preventDefault();
    (async () => {
  const rawResponse = await fetch('/lahore-weather', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({Value: input.value})
  });
      
      const content = await rawResponse.json();

      Temp.innerHTML = content.temperature;
      CityClass.innerHTML = content.city;
      Clouds.innerHTML = content.cloudy;
      Humidity.innerHTML = content.humidity;
      Wind.innerHTML = content.wind;
      
  input.value = "";

})();


});


})