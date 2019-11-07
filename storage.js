//Instantiate Local Storage
class Storage {
  constructor() {
    this.city;
    this.country;

  } 

    async getLocationData() {

    //Instantiate Current Location
      const currentLocation = new GeoLocator();

      currentLocation.getCurrentLocation(data => {
      currentLocation.getUserAddressBy(data.coords.latitude, data.coords.longitude)
          .then(data => {  
              if(localStorage.getItem('city') === null) {
                  this.city = data.city;
              } else {
                  this.city = localStorage.getItem('city');
              }
              if(localStorage.getItem('country') === null) {
                  this.country = data.country;
              } else {
                  this.country = localStorage.getItem('country');
              }
              })
          .catch(error => console.log(error));
           }); 

      return {
        city: this.city,
        country: this.country
      }
    }

  setLocationData(city,state) {
    localStorage.setItem('city',city);
    localStorage.setItem('state',state);
  }

}


