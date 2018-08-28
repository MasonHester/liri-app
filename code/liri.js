//liri.js

//Link to .env
require("dotenv").config();

//Links to other files
const search_concerts = require("./bandsInTownAPI.js");
const search_song = require("./spotifyAPI");
const search_movie = require("./omdbAPI.js");

console.log(`\nProcessing Input`);

function process_action(userInput) {
    //userInput is the command line arguments
    let action = userInput[2];

    let subject = userInput.slice(3);

    if(action === "concert-this") {
        search_concerts(subject);
    }
    
    else if(action === "spotify-this-song") {
        search_song(subject);
    }
    
    else if(action === "movie-this") {
        search_movie(subject);
    }
    
    else if(action === "do-what-it-says") {
        //code
    }
    
    else if(!action) {
        action = "do-what-it-says";
        console.log("No action given, defaulting to do-what-it-says");
    }
    
    else {
        console.log(
        `\nAction not recognized, list of commands (Bars not needed):\n
            \t> concert-this |Band Name|\n
                \t\tGives a list of concert info for a band\n
            \t> spotify-this-song |Song Name|\n
                \t\tGives a list of song info (artist, album, preview URL\n
            \t> movie-this |Movie Name|\n
                \t\tGives a list of info about a movie\n
            \t> do-what-it-says\n
                \t\tReads a text file and executes a mentioned action with a given subject`)
    }
}

process_action(process.argv);