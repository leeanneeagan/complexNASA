//declare variables 
//get nasa locations
//get weather
//weather url. weatherURL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${weatherApiKey}`;
//apikey



//action button 
document.querySelector('button').onclick = searchNASA

// function called for searchs
function searchNASA () {


const input = document.querySelector('input').value;
const url = `https://corsproxy.io/?url=https://data.nasa.gov/docs/legacy/gvk9-iz74.json`;
  
fetch(url)
        .then((res) => res.json())
        .then((data => {
            console.log(data);
            

        }))
        .catch((err) => console.error(err));
}

function getWEATHER(){
    
const APIkey= "f8c4c9fbfffe0029705c3398152d222f";
const weatherURL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${APIkey}`;


}