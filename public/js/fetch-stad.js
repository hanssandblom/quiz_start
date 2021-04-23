function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('stad');
//const url = 'http://127.0.0.1:3000/api/stad/';
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.stad);
        console.log("Visa första i json-objektet: " + data.stad[0].stadNamn);
        let stad = data.stad;
        return stad.map(function(stad) {
            let li = createNode('li');
            li.innerHTML = stad.stadNamn + " " + stad.stadByggnad;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
