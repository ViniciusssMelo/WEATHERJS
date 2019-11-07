class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.string = document.getElementById('w-string');
    //this.latlong = document.getElementById('w-latlong');
    this.img = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    //this.feelslike = document.getElementById('w-feels-like');
    this.wind_direction = document.getElementById('w-wind-direction');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    // Weather Icon
    let iconcode = weather.weather[0].icon;
    let iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;

    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = `Temp: ${convertKelvinToCelsius(weather.main.temp)}ºc`;
    this.img.setAttribute('src', iconurl);
    //this.latlong.textContent = `lat: ${weather.coord.lat} , lng: ${weather.coord.lon}`
    //this.feelslike.textContent = `Feels Like: ${}`
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.string.textContent = `Max: ${convertKelvinToCelsius(weather.main.temp_max)}ºc Min: ${convertKelvinToCelsius(weather.main.temp_min)}ºc`;
    this.wind.textContent = `Wind speed: ${metresPerSecondToKmPerHour(weather.wind.speed)} km/h`;
    this.wind_direction.textContent = `Direction: ${toTextualWindDirection(weather.wind.deg)}`;
}


}