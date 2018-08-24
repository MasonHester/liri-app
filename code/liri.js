//liri.js

//Link to .env
require("dotenv").config();

//Links to other files
const search_concerts = require("./bandsInTownAPI.js");
const search_song = require("./spotifyAPI");

console.log("--")
console.log("Processing Input");
// console.log(keys.spotify);
// console.log(keys.bandsInTown.apiKey);

const userInput = process.argv

const action = userInput[2];

let subject = userInput.slice(3);

// console.log("action: " + action);
// console.log("subject: " + subject);

if(action === "concert-this") {
    search_concerts(subject);
}

else if(action === "spotify-this-song") {
    search_song(subject);
}