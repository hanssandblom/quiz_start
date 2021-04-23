function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('city');
const url = 'http://127.0.0.1:3000/api/city/';
//const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.city);
        console.log("Visa första i json-objektet: " + data.city[0].cityName);
        let city = data.city;
        return city.map(function(city) {
            let li = createNode('li');
            li.innerHTML = city.cityName + " " + city.cityPopulation;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
