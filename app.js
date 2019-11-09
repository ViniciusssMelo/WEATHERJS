// Instantiate Storage
const storage = new Storage();

 // Instantiate Weather
 const weather = new Weather();

// Instantiate UI
const ui = new UI;
 
defineFirstLocation()
.then(data => {
      setTimeout( () => { 
      console.log(data)
      }, 1000 );
    })
.catch(err => console.log(err));

// Get stored location data
 async function defineFirstLocation() { 
    await storage.getLocationData()
    setTimeout( () => { 
        weather.city = storage.city
        weather.country = storage.country
        this.getWeather();
      }, 1000 );
}    

//Get Weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

//Changing the Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  city = document.getElementById('city').value;
  state = document.getElementById('state').value;

  weather.changeLocation(city,state)
  
  // Save Location on LS
  storage.setLocationData(city,state);
  
  // Get and Display weather
  this.getWeather();

  // Close Modal
  $('#locModal').modal('hide');

})

function getWeather(){
  weather.getWeather() 
    .then(results => {
        setTimeout( () => { 
          ui.paint(results)
      },1000)
    })
    .catch(err => console.log(err));
 }

function convertKelvinToCelsius(kelvin) {
  if (kelvin < (0)) {
    return 'below absolute zero (0 K)';
  } else {
    myCelcius = kelvin-273.15;
    myCelciusRounded = Math.round(myCelcius);
    return myCelciusRounded;
  }
}

function metresPerSecondToKmPerHour(ms) {
  kmh = (ms * 3.6);
  kmhRounded = Math.round(kmh);

  return kmhRounded;
}

function toTextualWindDirection(degree){
  if (degree>337.5) return 'Northerly';
  if (degree>292.5) return 'North Westerly';
  if(degree>247.5) return 'Westerly';
  if(degree>202.5) return 'South Westerly';
  if(degree>157.5) return 'Southerly';
  if(degree>122.5) return 'South Easterly';
  if(degree>67.5) return 'Easterly';
  if(degree>22.5){return 'North Easterly';}
  return 'Northerly';
}
