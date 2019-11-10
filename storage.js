//Instantiate Local Storage
class Storage {
  constructor() {
    this.city;
    this.country;

  } 

    async getLocationData() {
    //Instantiate Current Location
      const currentLocation = new GeoLocator();
      
      currentLocation.getCurrentLocation(() => {
      currentLocation.getUserAddressBy(currentLocation.lat, currentLocation.long)
          .then(() => {
              if(localStorage.getItem('city') === null) {
                  this.city = currentLocation.city;
              } else {
                  this.city = localStorage.getItem('city');
              }
              if(localStorage.getItem('country') === null) {
                  this.country = currentLocation.country;
              } else {
                  this.country = localStorage.getItem('country');
              }
              })
          .catch(error => console.log(error));
          
          return {
            city: this.city,
            country: this.country
          }
        })
      }   

  setLocationData(city,country) {
    localStorage.setItem('city',city);
    localStorage.setItem('country',country);
  }

  removeLocation() {

    // Remove from LS
    localStorage.clear();
  }

}