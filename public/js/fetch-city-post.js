const elForm = document.getElementById('formCity');
const elCityName = document.getElementById('cityName');
const elCityPopulation = document.getElementById('cityPopulation');
const elOutput = document.getElementById('output');

function newCity(event){
    event.preventDefault();
    let cityName = elCityName.value;
    let cityPopulation = elCityPopulation.value;

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({cityName:cityName, cityPopulation:cityPopulation}) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData('http://127.0.0.1:3000/api/city/')
    .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
    });

}

elForm.addEventListener('submit', newCity, false);

/*
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://dev.to/devamaz/using-fetch-api-to-get-and-post--1g7d
 */