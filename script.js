const nameElement = document.getElementById("city-name")
const weatherBtn  = document.getElementById("search-btn")
const displayTemp = document.getElementById("display-temp")
const description = document.getElementById("description")
const apiKey = "2331de054b22f7c32221c1f4261fe008"
const fetchError = document.getElementById("show-error")
const warning = document.getElementById("display-error")
const image = document.getElementById("image")
const displayData = document.getElementById("display-data")
const humidity = document.getElementById("display-humidity")
const windSpeed = document.getElementById("display-wind")
const displayLocation = document.getElementById("display-location")
const country = document.getElementById("country")

console.log("working");
displayData.style.display = "none"
weatherBtn.addEventListener('click',async()=>{
    if(nameElement.value === ""){
        warning.textContent = "Please enter location"
        return
    }
    fetchError.textContent = ""
    warning.textContent = ""
     displayData.style.display = "block"
    try{
       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameElement.value.trim()}&appid=${apiKey}&units=metric`)
       const data = await res.json()
       displayTemp.textContent = Math.floor(data.main.temp) + "°c"
       description.textContent = data.weather[0].description
       humidity.textContent = `Humidity ${data.main.humidity}%`
       windSpeed.textContent = `Wind ${Math.floor((data.wind.speed)*3.6)} km/h`
       displayLocation.textContent = `location: ${data.name}`
       country.textContent = `Country: ${data.sys.country}`

       image.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    }
    catch(error){
        fetchError.textContent = "Something went wrong may be its spelling "
    }
})