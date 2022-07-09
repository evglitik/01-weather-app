import axios from 'axios';

const API_KEY = 'HC7A72885SFE5ZT4V99UTSTZJ';
axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export default class fetchWeather {
  constructor() {
    this.address = 'Odessa,UA';
  }
  async onFetch() {
    try {
      const weather = await axios.get(
        `/${this.address}?key=${API_KEY}&unitGroup=metric&iconSet=icons2`
      );
      return weather.data;
    } catch (e) {
      console.log(e.message);
    }
  }
//   get address() {
//     return this.address;
//   }

//   set address(newAddress) {
//     this.address = newAddress;
//   }
}
