//spotify.js

//Link to .env
require("dotenv").config();

//npm linking
const Spotify = require("node-spotify-api");

//Links to other files
const keys = require("./keys.js");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

spotify.search({ type: 'track', query: 'All the Small Things', limit: 1}, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    let temp = data.tracks.items[0];
    //console.log(temp);
    console.log(temp.album.artists[0].name)
});