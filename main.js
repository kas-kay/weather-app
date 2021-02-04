let getData = ( ) =>
{ 
let city = document.querySelector("#cityName").value;
let appId = '06cd4618366398b9144331ae06e3f693';
apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&${appId}`;

fetch(apiUrl)
    .then ((resp) => resp.json())
    .then(apiResponse =>  {

if ( city === '' ) { 
const errorElement = document.createElement('h2');
errorElement.innerHTML = 'Please enter a valid city name';
document.querySelector('#output').appendChild(errorElement);
} 
else { 
const newElement = document.createElement('h3');
newElement.innerHTML = 
` ${city}:  ${Math.round(apiResponse.main.temp - 273.15)} &deg;`;
document.querySelector('#output').appendChild(newElement);
} 
} );
}
document.querySelector('#citySearch').addEventListener('click', getData);
