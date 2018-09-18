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
            "Get informtion about a movie",
            "Do what the txt file says",
            "Exit App"
        ]
    }).then(function(answer) {
        console.log(answer.action);
        if(answer.action === "Get a list of upcoming concerts for an artist") {
            search_concerts(undefined, options_search);
        }
        
        else if(answer.action === "Get information about a song") {
            search_song(undefined, options_search);
        }

        else if(answer.action === "Get informtion about a movie") {
            search_movie(undefined, options_search);
        }

        else if(answer.action === "Do what the txt file says") {
            do_what_it_says(function(err, data) {
                if(err) return console.log(err);
                process_action(data);
            });
        }

        else if (answer.action === "Exit App") {
            console.log("...Exiting Application...")
            process.exit();
        }

        else {
            console.log("Unsure how you got here...");
            console.log("just dont do what you did again");
            options_search();
        }
    });
}

function process_action(userInput) {
    //userInput is the command line arguments
    let action = userInput[2];

    let subject = userInput.slice(3);

    if(action === "concert-this") {
        search_concerts(subject, options_search);
    }
    
    else if(action === "spotify-this-song") {
        search_song(subject, options_search);
    }
    
    else if(action === "movie-this") {
        search_movie(subject);
    }
    
    else if(action === "do-what-it-says") {
        do_what_it_says(function(err, data) {
            if(err) return console.log(err);
            console.log(data);
            options_search();
        });
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