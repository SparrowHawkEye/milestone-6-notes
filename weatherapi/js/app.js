function searchLocation() {
  const spinner =document.getElementById("spinner")
  console.log(spinner);
  const inputValue = document.getElementById('location-input').value;
  spinner.style.display ="block";
  const locationTitle = document.getElementById('location-title');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=f403251d19eaa5a3a07feac11fe94d11`
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
      spinner.style.display ="none";
    }
  }
    )
    
}

function displayLocation(data) {
  const locationTitle = document.getElementById('location-title');
  locationTitle.innerText = `${data.name}`

  const weatherLists = document.getElementById("weather-list")
  weatherLists.innerHTML =`
  
  <li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-solid fa-temperature-high"></i>
  <span>High</span> <span>${data.main.temp_max}°C</span>
</li>
<li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-solid fa-temperature-low"></i>
  <span>Low</span> <span>${data.main.temp_min}°C</span>
</li>
<li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-solid fa-smog"></i>
  <span>Humidity</span> <span>${data.main.humidity}%</span>
</li>
<li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-solid fa-eye"></i>
  <span>Visibility</span><span>${(data.visibility)/1000} KM</span>
</li>
<li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-thin fa-angles-down"></i>
  <span>Pressure</span><span>${parseFloat((data.main.grnd_level)/1013.25).toFixed(2)}hPa</span>
</li>
<li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-solid fa-wind"></i>
  <span>Wind</span><span>${data.wind.gust} mph</span>
</li>
<li
  class="list-group-item d-flex align-items-center justify-content-between"
>
  <i class="fa-solid fa-cloud"></i>
  <span>Clouds</span><span>${data.clouds.all}</span>
</li>
  `
}

