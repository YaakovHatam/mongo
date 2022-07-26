const fs = require('fs');
const names = require('./first-names.json');
const foods = require('./foods.json');
const restaurants = foods.map(f => f.restaurant);
const artists = require('./artists.json').map(a => a.name);

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const data = Array.from(new Array(100)).map(e => ({
    name: names[Math.floor(Math.random() * names.length)],
    age: randBetween(20, 80),
    phone: {
        personal: `${randBetween(111, 999)}-${randBetween(111, 999)}-${randBetween(111, 999)}`,
        work: `${randBetween(111, 999)}-${randBetween(111, 999)}-${randBetween(111, 999)}`,
        ext: randBetween(1111, 9999)
    },
    favorites: {
        restaurant: restaurants[randBetween(0, restaurants.length)],
        artist: artists[randBetween(0, artists.length)]
    },
}));

fs.writeFileSync('./emp.json', JSON.stringify(data))
