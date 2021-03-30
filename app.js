fetch("https://restcountries.eu/rest/v2/all")
       .then(res => res.json())
       .then(data => loadData(data));

const  loadData = data => {
  console.log(data);
  const countriesDiv = document.getElementById("countries")
  data.forEach(country => {
  const countryDiv = document.createElement("div")
  countryDiv.className= 'country'
  const countryInfo = `
  <img class='photo' src="${country.flag}">
  <h3 class='country-name'>${country.name}</h3>
 
  <button onclick="document.getElementById('id01').style.display='block', showDetail('${country.name}')"  class="w3-button w3-yellow">Details</button>`
countryDiv.innerHTML = countryInfo;  
countriesDiv.appendChild(countryDiv)
 });
}
const showDetail = country =>{
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(res => res.json())
        .then(data => {
        console.log(data[0].name);
        const countryDiv = document.getElementById("countryDetail");
        countryDiv.className= 'singleDetail'
        countryDiv.innerHTML= `
        <h4>Country Name: ${data[0].name}</h4>
        <img class='photo1' src="${data[0].flag}">
        <ul class="listItem">
        <li>Capital: ${data[0].capital}</li>
        <li>Currencies :${data[0].currencies[0].name} (${data[0].currencies[0].symbol})</li>
        <li>Area: ${data[0].area}</li>
        <li>Population: ${data[0].population}</li>
        <li>Language: ${data[0].languages[0].name}</li>
        <li>Native Name: ${data[0].nativeName}</li>
    </ul>`
 })
}
       