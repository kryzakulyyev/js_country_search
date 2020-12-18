// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");

function getCountry(){
const url = 'https://restcountries.eu/rest/v2/name/'+ countryInput.value 

const request = new XMLHttpRequest(); 
request.responseType = 'json';
request.onreadystatechange = () =>{
  if (request.readyState === XMLHttpRequest.DONE) {
    const [data] = request.response;
      renderCountry(data);
  }  
} 
request.open("GET", url);
request.send();
} 
// btn.addEventListener('click', displayCountry)
 
//2 - PART
 function getCountryAndNeighbour(country){
   const url = 'https://restcountries.eu/rest/v2/name/';
   const alpha  = 'https://restcountries.eu/rest/v2/alpha/';
   const request = new XMLHttpRequest();
   request.addEventListener('load', function () {
    console.log("hello")
    let [data] = JSON.parse(this.responseText);
    
    // const [data] = JSON.parse(this.responseText);
    renderCountry(data);
     
     const neighbour = data.borders[1]
     if(!neighbour){
      return 
     }
     const request2 = new XMLHttpRequest();
     request2.addEventListener('load', function () {
      let data = JSON.parse(this.responseText);
      console.log(JSON.parse(this.responseText))
      renderCountry(data, 'neighbour');
     });
     request2.open('GET', alpha + neighbour);
     request2.send();
   })
   request.open('GET', url + country);
   request.send();  
 } 
 btn.addEventListener('click', displayCountries)
