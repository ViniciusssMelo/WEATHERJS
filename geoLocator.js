class GeoLocator{
  constructor(city,country) {
    this.keyUser = 'AIzaSyCn83LgyeiP3K1hKrxdtSwmrtr35Nh7BAs';
    this.city = city;
    this.country = country;
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
             //console.log(position);
             return callback(position);
  });
}    

}