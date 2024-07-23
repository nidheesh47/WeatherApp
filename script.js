const nameElement = document.getElementById("city-name") 
const weatherBtn  = document.getElementById("search-btn")
const displayTemp = document.getElementById("display-temp")
const description = document.getElementById("description")
const apiKey = "2331de054b22f7c32221c1f4261fe008"
const fetchError = document.getElementById("show-error")
const warning = document.getElementById("cityName-error")
const image = document.getElementById("image")


weatherBtn.addEventListener('click',async()=>{
    if(nameElement.value === ""){
        warning.textContent = "Please enter location"
        return
    }
    warning.textContent = ""
    try{
       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameElement.value.trim()}&appid=${apiKey}&units=metric`) 
       const data = await res.json()  
       displayTemp.textContent = data.main.temp
       description.textContent = data.weather[0].description
       image.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    }
    catch(error){
        fetchError.textContent = "Something went wrong please try again after sometime"
    }
})