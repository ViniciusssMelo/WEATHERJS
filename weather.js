class Weather {
  constructor() {
    this.client_key = "64f7f953368e3e84ff2d14f97ec552e4";
    this.city;
    this.state;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.client_key}`);
    const responseData = await response.json();
    return responseData
  }

  // Change weather Location
  changeLocation(city,state) {
    this.city = city;
    this.state = state;
  }

}