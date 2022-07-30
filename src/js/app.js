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

            <div class="info-global__text-global"><p>${w.description}</p></div>

      <ul class="weather__info--list">
        <li class="weather__info--item">
        <span> </span>
          <p>Humidity ${w.currentConditions.humidity}%</p>
        </li>
        <li class="weather__info--item">
        <span> </span>
          <p>Cloudcover ${w.currentConditions.cloudcover}%</p>
        </li>
        <li class="weather__info--item">
        <span> </span>
          <p>UV-index ${w.currentConditions.uvindex}</p>
        </li>
        <li class="weather__info--item">
        <span> </span>
          <p>Visibility ${w.currentConditions.visibility}</p>
        </li>
      </ul>

          </div>
          </div>
        </div>
      </div>`;

  const nextForecast = w.days
    .map(e => {
      return `<li class="next-forecast__days--item">
            <div class="next-forecast__days--header-info header-day">
                <span class="header-day__date"> ${e.datetime}</span>
                <span class="header-day__icon"> ${weatherIcons.toCamelCase(
                  e.icon
                )}</span>
                <span class="header-day__temp"> ${e.feelslikemax} | ${
        e.feelslikemin
      }</span>
            </div>

            <div class="next-forecast__days--hidden-info hidden-day">

              <span class="hidden-day__temp">${e.temp}</span>
              <span class="hidden-day__icon">${weatherIcons.toCamelCase(
                e.icon
              )}</span>
              <p class="hidden-day__text">${e.description}</p>
              <ul class="hidden-day__list-info">
                <li class="hidden-day__item-info">
                  <span class="hidden-day__icon">XX</span>
                  <span class="hidden-day__rain">Dew ${e.dew}</span>
                </li>
                <li class="hidden-day__item-info">
                  <span class="hidden-day__icon">XX</span>
                  <span class="hidden-day__wind">Wind ${e.windspeed} M/s</span>
                </li>
              </ul>

              <ul class="hidden-day__list">
                <li class="hidden-day__item">
                  <span class="hidden-day__item--icon">XX</span>
                  <span class="hidden-day__item--text">Humidity ${e.humidity}</span>
                </li>
                <li class="hidden-day__item">
                  <span class="hidden-day__item--icon">XX</span>
                  <span class="hidden-day__item--text">Sunrise ${e.sunrise}</span>
                </li>
                <li class="hidden-day__item">
                  <span class="hidden-day__item--icon">XX</span>
                  <span class="hidden-day__item--text">UV-index ${e.uvindex}</span>
                </li>
                <li class="hidden-day__item">
                  <span class="hidden-day__item--icon">XX</span>
                  <span class="hidden-day__item--text">Sunset ${e.sunset}</span>
                </li>
              </ul>
            </div>
          </li>`;
    })
    .join('');

  refs.sectionWeather.insertAdjacentHTML('beforeend', pageStructure);
  refs.listNextForecastDays.insertAdjacentHTML('beforeend', nextForecast);
}

const refs = {
  sectionWeather: document.querySelector('.weather'),
  listNextForecastDays: document.querySelector('.next-forecast__days'),
};
 
