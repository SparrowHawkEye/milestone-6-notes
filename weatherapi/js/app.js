function searchLocation() {
  const inputValue = document.getElementById('location-input').value;
  const locationTitle = document.getElementById('location-title');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f403251d19eaa5a3a07feac11fe94d11`
    fetch(url)
    .then(response => response.json())
    
    .then(data =>{
      if(data.message === "Nothing to geocode"){
        locationTitle.innerText = `${inputValue} can not be found!!!`
    } else if(data.message === "city not found"){
      locationTitle.innerText = `${inputValue} can not be found!!!`
    }
    else {
      displayLocation(data)
      console.log(data);
    }
  }
    )
}

function displayLocation(data) {
  const locationTitle = document.getElementById('location-title');
  locationTitle.innerText = `${data.name}`
}

