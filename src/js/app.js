import fetchWeather from './app-fetch';
import weatherIcons from './weather-icons';


console.log(weatherIcons.toCamelCase('partly-cloudy-night'));



const weatherFetch = new fetchWeather();

async function getWeather() {
  const weatherObj = await weatherFetch.onFetch();
  console.log(weatherObj);
  createPageWeatherInfo(weatherObj);
}

getWeather();

function createPageWeatherInfo(w) {
  const pageStructure = `<div class="container">
        <h1 class="weather__location-title">${w.resolvedAddress}</h1>

        <div class="weather__date-today">
          <p class="weather__date-today--text">TodayDate ${
            w.currentConditions.datetime
          }</p>
        </div>
        <div class="weather__info info">

          <div class="info__info-global info-global">

            <div class="info-global__pictures-global">
            <span>${weatherIcons.toCamelCase(w.currentConditions.icon)}</span>
            <span>${w.currentConditions.temp}</span>
            <span>${w.currentConditions.conditions}</span>
            </div>

            <div class="info-global__text-global"></div>

            <ul class="info-global__list">
              <li class="info-global__item">
                <p class="info-global__text">${w.currentConditions.temp} | </p>
              </li>

              <li class="info-global__item">
                <p class="info-global__text">Feels like ${
                  w.currentConditions.feelslike
                } | </p>
              </li>

              <li class="info-global__item">
                <p class="info-global__text">Wind ${
                  w.currentConditions.windspeed
                } KM/H WSW</p>
              </li>
            </ul>
          </div>

          </div>
        </div>
      </div>`;
  refs.sectionWeather.insertAdjacentHTML('beforeend', pageStructure);
}

const refs = {
  sectionWeather: document.querySelector('.weather'),
};

// function toCamelCase(string) {
//   const arr = string.split('').map(word => {
//     if (word === '_' || word === '-') {
//       return '$';
//     } else return word;
//   });

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '$') {
//       arr.splice(i + 1, 1, arr[i + 1].toUpperCase());
//     }
//   }

//   return arr.join('').split('$').join('');
// }

// console.log(toCamelCase('jango-her'));
