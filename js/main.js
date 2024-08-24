const form = document.querySelector('.form');
const input = document.querySelector('.input');
const APIKey = '1ec1a9252195efb889ac25b35d961c48';
const city = document.querySelector('.weather__city');



form.onsubmit = submitHAndler;

async function submitHAndler(e) {
  e.preventDefault();
  if (!input.value.trim()) {
    console.log('Enter city name');
    return;
  }

  const cityName = input.value.trim();
  input.value = '';

  const cityInfo = await getGeo(cityName);

  console.log(cityInfo);
  //   const cityNow = await getlocation();
  //   console.log(cityNow)

  const weatherInfo = await getWeather(cityInfo[0].lat, cityInfo[0].lon);

  const wetherData = {
    name: weatherInfo.name,
    temp: weatherInfo.main.temp,
    humidity: weatherInfo.main.humidity,
    speed: weatherInfo.wind.speed,
    main: weatherInfo.weather[0].main,
  };

  renderWetherData(wetherData);
}

// console.log(wetherData)

async function getGeo(name) {
  const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${APIKey}`;
  const response = await fetch(geoURL);
  const data = await response.json();

  //   console.log(data[0].lat);
  //   console.log(data[0].lon);
  return data;
}

async function getWeather(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${APIKey}`;

  const response = await fetch(weatherUrl);
  const data = await response.json();
  return data;
}

function renderWetherData(data) {
  const temp = document.querySelector('.weather__temp');
  const city = document.querySelector('.weather__city');
  const humidity = document.querySelector('#humidity');
  const speed = document.querySelector('#speed');
  const img = document.querySelector('.weather__img');

  temp.innerHTML = Math.round(data.temp) + '°c';
  city.innerHTML = data.name;
  humidity.innerHTML = data.humidity + '%';
  speed.innerHTML = data.speed + 'km/h';

  const fileNames = {
    Clouds: 'clouds',
    Clear: 'clear',
    Rain: 'rain',
    Mist: 'mist',
    Drizzle: 'drizzle',
    Snow: 'snow',
  };

  // img.src = `./img/weather/${fileNames[data.main]}.png`;

  if (fileNames[data.main]) {
    img.src = `./img/weather/${fileNames[data.main]}.png`;
  }
}

// fetch("https://ipapi.co/json/")
//   .then((response) => response.json())
//   .then((data) => {
//     let city = data.city;

//     console.log("Город пользователя: ", city);
//   })
//   .catch((error) => {
//     console.log("Произошла ошибка: ", error);
//   });

async function getlocation() {
  const city = `https://ipapi.co/json/`;
  const CurrentCity = document.querySelector('.weather__city');
  const response = await fetch(city);
  const data = await response.json();
  console.log(data.city);
  CurrentCity.textContent = data.city;
}

getlocation();
