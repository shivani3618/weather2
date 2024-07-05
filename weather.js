var inputvalue = document.querySelector('#cityname');
var btn = document.querySelector('#submit');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik="63a90ae96d390ec37d6c1252f5a86e1a"
function convertion(val)
{
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click',function()
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputvalue.value+`&appid=`+apik)
    .then(res => res.json())

    .then(data =>
    {
        
        var nameval = data.name;
        var descripval = data.weather[0].description;
        var tempature = data.main.temp;
        var wndspeed = data.wind.speed;


        city.innerHTML = `Weather of <span> ${nameval} </span>`;
        temp.innerHTML = `Temperature: <span> ${convertion (tempature)} C</span>`;
        descrip.innerHTML=`Sky Conditions:<span>: ${descripval}</span>`;
        wind.innerHTML=`Wind Speed :<span>${wndspeed} km/h</span>`;
 })
 
  .catch(err => {
    alert('you entered wrong city name');
  });
})