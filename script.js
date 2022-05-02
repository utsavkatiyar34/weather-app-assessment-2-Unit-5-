let area=document.getElementById("searched_data");
let forecast=document.getElementById('weather');
let cind=document.getElementById('icon');
async function getData(){
  let city_name= document.getElementById('addyInput').value;
  let API_key="d28b61ada1d4c867e19b65275a06b8d4";
 console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
  try{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`);
    let data=await res.json();
    console.log(data);
    displayData(data);
  }
  catch(err){
    console.log(err);
  }
}
function displayData(data){
    let box=document.createElement("div");
    let mapp =document.createElement("iframe");
    mapp.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  
    let Name=document.createElement("h1");
    Name.textContent=data.name+"'s Weather Information";

    let Temp=document.createElement("h2");
    Temp.textContent="Temperature :"+ data.main.temp;

    let feels_like=document.createElement("h2");
    feels_like.textContent="Feels Like :"+ data.main.feels_like;

    let TempMax=document.createElement("h2");
    TempMax.textContent="Maximum Temperature :"+ data.main.temp_max;
    
    let TempMin=document.createElement("h2");
    TempMin.textContent="Minimum Temperature :"+ data.main.temp_min;

    let humidity=document.createElement("h2");
    humidity.textContent="Humidity :"+data.main.humidity;

    let pressure=document.createElement("h2");
    pressure.textContent="Pressure :"+data.main.pressure;

    let sunrise=document.createElement("h2");
    sunrise.textContent="Sunrise :"+data.sys.sunrise;
    
    let sunset=document.createElement("h2");
    sunset.textContent="Sunset :"+data.sys.sunset;

    box.append(Name, sunrise, sunset, Temp, feels_like, TempMax, TempMin, humidity, pressure,);
    area.append(box);
    
    forecast.append(mapp);
    }

    