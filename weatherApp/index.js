const weatherform=document.querySelector(".weatherform");
const cityinput=document.querySelector(".cityinput");
const card=document.querySelector(".card");
const apikey="38b8aa8dc66f4a018c505f62f1774eff";
const citydisplay=document.querySelector(".citydisplay");


weatherform.addEventListener("submit", async event=>{
    event.preventDefault();
    const city=cityinput.value;
    if(city){
        try{
            const weatherdata=await getWeatherData(city);
            displayWeatherData(weatherdata);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError(" Please enter a city!!")
    }
});

async function getWeatherData(city){
const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
const response =await fetch(apiurl);
if(!response.ok){
    throw new Error("Could not fetch weather data");
}
return await response.json();
}

async function displayWeatherData(data){
    console.log(data);
    const{name:city,main:{temp,humidity},weather:[{description,id,icon}]}=data;
     
    card.textContent="";
    card.style.display="flex";
    const tempdisplay=document.createElement("p");
    const citydisplay=document.createElement("h1");
    const humiditydisplay=document.createElement("p");
    const descdisplay=document.createElement("p");
    const weatheremoji=document.createElement("p");
    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    
    card.appendChild(descdisplay);
    card.appendChild(weatheremoji);

    tempdisplay.classList.add("tempdisplay");
    citydisplay.textContent=city;
     tempdisplay.textContent=`${(temp-273).toFixed(2)}°C`;
    
    citydisplay.classList.add("citydisplay");
   
  
    humiditydisplay.textContent=`Humidity: ${humidity} %`;
    humiditydisplay.classList.add("humiditydisplay");
    descdisplay.textContent=description;
    descdisplay.classList.add("humiditydisplay");
    weatheremoji.textContent=getWeatherEmoji(id);
    weatheremoji.classList.add("weatheremoji");


}

function getWeatherEmoji(weatherId){
     switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "🌧️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "⛄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "⛅";
        default:
            return "❓";
}}
function displayError(message){
const errordisplay=document.createElement("p");
errordisplay.textContent=message;
errordisplay.classList.add("errordisplay");
card.textContent="";
card.style.display="flex";
card.appendChild(errordisplay);
}