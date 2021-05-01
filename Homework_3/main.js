//iPhone JS
let nav = document.getElementsByClassName("nav-bars")
let search_background = document.getElementsByClassName("search_background")
let btn_bars = document.getElementsByClassName("fa-bars")
let btn_times = document.getElementsByClassName("fa-times")

function changeIcon(x){
  x.classList.toggle("fa-times")
  x.classList.toggle("fa-bars")
  if(x.classList.contains("fa-times")){
    search_background[0].style.display = "block"
  } else {search_background[0].style.display ="none"
} 
}


// lấy data API - xuất ra dữ liệu
const api ="cee67ad16dae49de8ac400759564c3ce"
let current_location = document.getElementsByClassName("normal_background")
let btn_current = document.getElementById("btn_location") 
let input = document.getElementById("input")
// let btn_search = document.getElementsByClassName("btn_search")

btn_current.addEventListener("click", function(){
currentLocation("Ho Chi Minh")
current_location[0].innerHTML = " "
})

async function currentLocation(city){
  let res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${api}`)
  data = await res.json()
  console.log(data)
  let day = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  let img= data.data[0].weather.icon 
  let name = data.city_name
  let current_deg = Math.round(data.data[0].temp)
  let current_stats = data.data[0].weather.description
  let avr_deg = (Math.round((data.data[0].max_temp + data.data[0].min_temp)/2))
  let country = data.country_code

current_location[0].innerHTML+=
`
   <div class="current_location">
    <div class="current_location_title">
    <p>Current Location</p>
    <h2>${name}</h2>
    <h2>${country}</h2>
    </div>
    
    <div class="current_location_stats">
        <img src = "https://www.weatherbit.io/static/img/icons/${img}.png">
    <div class="current_location_status">
      <h1>${current_deg}°C</h1>
      <p> ${current_stats}</p>
      <p>Feel likes ${avr_deg}°C </p>       
     </div>
    </div>

    <div class="current_location_day">
      
    </div>
    </div> 
`
let current_location_day = document.getElementsByClassName("current_location_day")
for(let i = 0;i < 7 ;i++) {
  let img= data.data[i].weather.icon 
  let avr_deg = (Math.round((data.data[i].max_temp + data.data[i].min_temp)/2))
 current_location_day[0].innerHTML +=
 `<div class="day">
 <h3>${day[i]}</h3>
 <img id="status" src="https://www.weatherbit.io/static/img/icons/${img}.png">
 <p id="deg">${avr_deg}°C</p>
</div>`
  }

}
// currentLocation("Ho Chi  Minh")

//Another Country
let btn_search = document.getElementById("btn_search")
let other_country = document.getElementsByClassName("another_country")
btn_search.addEventListener("click",function(){
let city = input.value
anotherCity(city)
other_country[0].innerHTML=""

})

async function anotherCity(city) {
  let res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${api}`)
  let data = await res.json()
  let day = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  let img= data.data[0].weather.icon 
  let name = data.city_name
  let another_Deg = Math.round(data.data[0].temp)
  let another_stats = data.data[0].weather.description
  let avr_deg = (Math.round((data.data[0].max_temp + data.data[0].min_temp)/2))
  let country = data.country_code
  other_country[0].innerHTML +=
  ` <div class="another_location">
    <div class="another_location_title">
    <p>Current Location</p>
    <h2>${name}</h2>
    <h2>${country}</h2>
    </div>
    
    <div class="another_location_stats">
        <img src = "https://www.weatherbit.io/static/img/icons/${img}.png">
    <div class="another_location_status">
      <h1>${another_Deg}°C</h1>
      <p> ${another_stats}</p>
      <p>Feel likes ${avr_deg}°C </p>       
     </div>
    </div>

    <div class="another_location_day">
      
    </div>
    </div>`

let another_location_day = document.getElementsByClassName("another_location_day")
for(let i = 0;i < 7 ;i++) {
  let img= data.data[i].weather.icon 
  let avr_deg = (Math.round((data.data[i].max_temp + data.data[i].min_temp)/2))
 another_location_day[0].innerHTML += 
 `<div class="day">
 <h3>${day[i]}</h3>
 <img id="status" src="https://www.weatherbit.io/static/img/icons/${img}.png">
 <p id="deg">${avr_deg}°C</p>
</div>`
  }
}

// Desktop JS
//Current Location Desktop button
let btn_current_desktop = document.getElementById("btn_current_full")
let current_location_status_desktop = document.getElementsByClassName("current_location_full")
btn_current_desktop.addEventListener("click",function(){
  currentLocationDesktop("Ho Chi Minh")
  current_location_status_desktop[0].innerHTML=""
})

async function currentLocationDesktop(city) {
  let res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${api}`)
  data = await res.json()
  console.log(data)
  let day = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  let img= data.data[0].weather.icon 
  let current_deg = Math.round(data.data[0].temp)
  let current_stats = data.data[0].weather.description
  let avr_deg = (Math.round((data.data[0].max_temp + data.data[0].min_temp)/2))
current_location_status_desktop[0].insertAdjacentHTML("afterbegin",
`<div class="current_location_status_full">
<div class="current_location_status_image_full">
<img src="https://www.weatherbit.io/static/img/icons/${img}.png">
<div class="current_stats_full">
  <h1>${current_deg}°C</h1>
  <p>${current_stats}</p>
  <p>Feel likes ${avr_deg}°C </p>     
</div>
</div>

<div class="current_location_status_name_full">
<p>Current Location</p>
<h4>Ho Chi Minh</h4>
<h4>VN</h4>
</div>
</div>
<div class="current_location_status_day_full">
</div>`)
let current_location_status_day_desktop = document.getElementsByClassName("current_location_status_day_full")
for(let i = 0;i < 7 ;i++) {
  let img= data.data[i].weather.icon 
  let avr_deg = (Math.round((data.data[i].max_temp + data.data[i].min_temp)/2))
  current_location_status_day_desktop[0].insertAdjacentHTML("beforeend",
 `<div class="day_full">
 <h4>${day[i]}</h4>
 <img src="https://www.weatherbit.io/static/img/icons/${img}.png">
 <h3>${avr_deg}°C <h3>
</div>`)
  }
}



//Search for Another Desktop Button
let btn_search_desktop = document.getElementById("btn_search_full")
let input_search_desktop = document.getElementById("input_full")
let another_location_day_desktop = document.getElementsByClassName("another_location_full")
btn_search_desktop.addEventListener("click",function(){
  let city = input_search_desktop.value
  anotherLocationDesktop(city)
  another_location_day_desktop[0].innerHTML=" "
})


async function anotherLocationDesktop(city) {
  let res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${api}`)
  data = await res.json()
  console.log(data)
  let day = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  let img= data.data[0].weather.icon 
  let current_deg = Math.round(data.data[0].temp)
  let current_stats = data.data[0].weather.description
  let avr_deg = (Math.round((data.data[0].max_temp + data.data[0].min_temp)/2))
  let country = data.country_code
  let name = data.city_name
  another_location_day_desktop[0].insertAdjacentHTML("afterbegin",
`<div class="another_location_status_full">
<div class="another_location_status_image_full">
<img src="https://www.weatherbit.io/static/img/icons/${img}.png">
<div class="another_stats_full">
  <h1>${current_deg}°C</h1>
  <p>${current_stats}</p>
  <p>Feel likes ${avr_deg}°C </p>     
</div>
</div>

<div class="another_location_status_name_full">
<p>Current Location</p>
<h4>${name}</h4>
<h4>${country}</h4>
</div>
</div>
<div class="another_location_status_day_full">
</div>`)
let another_location_status_day_desktop = document.getElementsByClassName("another_location_status_day_full")
for(let i = 0;i < 7 ;i++) {
  let img= data.data[i].weather.icon 
  let avr_deg = (Math.round((data.data[i].max_temp + data.data[i].min_temp)/2))
  another_location_status_day_desktop[0].insertAdjacentHTML("beforeend",
 `<div class="day_full">
 <h4>${day[i]}</h4>
 <img src="https://www.weatherbit.io/static/img/icons/${img}.png">
 <h3>${avr_deg}°C <h3>
</div>`)
  }
}