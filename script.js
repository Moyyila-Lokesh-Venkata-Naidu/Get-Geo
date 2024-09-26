const btn = document.getElementById("btn");
const input = document.getElementById("search");
const text = document.getElementById("name");
const country = document.getElementById("country")
const localtime = document.getElementById("localtime")
const temp = document.getElementById("temp")
const humid = document.getElementById("humidity")
const region = document.getElementById("region")

async function getData(cityName){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=dc07af8bb0db4cec8a3121126240209&q=${cityName}&aqi=yes`
    );
    return await promise.json(); 
};

btn.addEventListener("click",async () =>{
    const value = input.value;
    const relt = await getData(value);
    text.innerText = `Name: ${relt.location.name}`;
    region.innerText = `Region: ${relt.location.region}`
    country.innerText = `Country:${relt.location.country}`;
    localtime.innerText = `Time:${relt.location.localtime}`;
    temp.innerText = ` Temperature: ${relt.current.temp_c}  Celsius`;
    humid.innerText = `Humidity: ${relt.current.humidity}`;
});