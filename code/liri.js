//liri.js

//Link to .env
require("dotenv").config();

//Linking to NPs
const inquirer = require("inquirer");

//Links to other files
const search_concerts = require("./bandsInTownAPI.js");
const search_song = require("./spotifyAPI");
const search_movie = require("./omdbAPI.js");
const do_what_it_says = require("./doWhatItSays.js");

function options_search() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Get a list of upcoming concerts for an artist",
            "Get information about a song",
            "Find data within a specific range",
            "Search for a specific song"
        ]
    }).then(function(answer) {
        console.log(answer.action);
        if(answer.action === "Get a list of upcoming concerts for an artist") {
            search_concerts();
        }
        else if(answer.action === "Get information about a song") {
            search_song()
        }
        else {
            console.log(`...`);
        }
    });
}

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
        do_what_it_says(function(err, data) {
            if(err) return console.log(err);
            console.log(data);
        })
    }
    
    else if(!action) {
        console.log("No action given or action not recognized defaulting to do-what-it-says");
        process_action(["","","do-what-it-says"]);
    }
    
    else {
        console.log(`\nAction not recognized, list of commands (Bars not needed):`);
        console.log(`\t> concert-this |Band Name|`);
        console.log(`\t\tGives a list of concert info for a band`);
        console.log(`\t> spotify-this-song |Song Name|`);
        console.log(`\t\tGives a list of song info (artist, album, preview URL`);
        console.log(`\t> movie-this |Movie Name|`);
        console.log(`\t\tGives a list of info about a movie`);
        console.log(`\t> do-what-it-says`);
        console.log(`\t\tReads a text file and executes a mentioned action with a given subject`);
    }
}

if(!process.argv[2]) {
    options_search();
}

else {
    process_action(process.argv);
}