class GeoLocator{
  constructor() {
    this.keyUser = 'AIzaSyCSctkF0WEJoPTdWpZabV1Lmkuz5Z61Y6I';
    this.city;
    this.country;
    this.lat;
    this.long;
  }

  async getUserAddressBy(lat, long) {

      const location = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${this.keyUser}`);

      const currentLoc = await location.json();
      this.city = currentLoc.results[0].address_components[3].short_name, 
      this.country = currentLoc.results[0].address_components[5].short_name

      return {city: this.city, country: this.country}

    }

  getCurrentLocation(callback) {
        navigator.geolocation.getCurrentPosition(position => {
            this.long = position.coords.longitude;
            this.lat = position.coords.latitude;
 
            callback();
  },
       function (error) {
           console.log(`The Locator was denied. :( ${error}`)
  });    
}   

}