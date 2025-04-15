const inputCity=document.querySelector(".input input");
const temperature=document.querySelector(".temperature p");
const city=document.querySelector(".city-name p");
const humidity=document.querySelector(".humidity-per p");
const windspeed=document.querySelector(".wind-speed-per p");
const btnClick=document.querySelector(".search-logo");
const middleSection = document.querySelector(".middle");
const lastSection = document.querySelector(".last");



btnClick.addEventListener("click",async()=>{
  const cityName=inputCity.value.trim();
  if(!cityName){
    alert("Please enter the city name");
    return;
  }


  const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a4663422fb9518f589b29ad78d6f9cfa&units=metric `;
  
  const response=await fetch(weatherUrl);
  const data= await response.json();

  if(!response.ok){
    alert("Error : " + response.status + " City not found");
    return;
  }
  console.log(data);
  
   city.textContent=`${data.name}`;
   temperature.textContent=`${Math.round(data.main.temp)}°C`;
   windspeed.textContent=`${Math.round(data.wind.speed)}  km/hr`;
   humidity.textContent=`${data.main.humidity+ " %"}`;

   middleSection.style.display = "block";
   lastSection.style.display = "block";



})


inputCity.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    btnClick.click();
  }
});






