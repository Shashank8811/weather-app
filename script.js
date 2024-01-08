const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "98981df0c7msh72e18e637e6919fp1ef15fjsn99e865646a7b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getData = (city) => {
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

let btn = document.getElementById("search");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getData(city.value);
});
