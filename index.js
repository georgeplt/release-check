const fs = require('fs');

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

let tickets = [];
let cleanTickets = [];
fs.readFileSync('data.txt', 'utf-8').split('/\r\n/').map(line => tickets.push(line.match(/(ct-\d)\w+/gi)));
tickets[0].forEach(t => cleanTickets.push(`https://prettylittlething.atlassian.net/browse/${t.toUpperCase()}`));

console.info(cleanTickets.filter(onlyUnique).sort());
