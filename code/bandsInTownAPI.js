//bandsInTownAPI.js

//Link to .env
require("dotenv").config();

//npm linking
const request = require("request");
const moment = require("moment");
const inquirer = require("inquirer");

//Links to other files
const keys = require("./keys.js");

//loopMod used to limit to 5 if greater
function console_log(loopMod, jsonData, artist) {
    const pageBreakSolid = `===============================================\n`;
    const pageBreakSoft = `-----------------------------------------------\n`;

    console.log(`${pageBreakSolid}`);
    console.log(`\t\t${artist.toUpperCase()}`);
    console.log(`\n${pageBreakSolid}`);

    for (let i = 0; i < loopMod; i++) {
        console.log(`\t${jsonData[i].venue.name}`);
        console.log(`\t${jsonData[i].venue.city}, ${jsonData[i].venue.region}`);
        console.log(`\t${moment(jsonData[i].datetime).format("YYYY-MM-DD")}`);
        console.log(`\n${pageBreakSoft}`);
    }
}

function search_concert(artist, artistDisplayName) {
    const appID = keys.bandsInTown.apiKey;
    const queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${appID}`;

    request(queryURL, function(err, response, body) {
        //Shows error if there is one
        if (err && response.statusCode === 200) {
            console.log(`Error: ${err}`);
        }

        else {
            //Manipulates data for use
            const initial = JSON.stringify(body);
            const stringified = JSON.parse(initial);
            const jsonData = JSON.parse(stringified);

            if(jsonData[0]) {
                if(jsonData.length < 5) {
                    console_log(jsonData.length, jsonData, artistDisplayName);                              
                }
    
                else {
                    console_log(5, jsonData, artistDisplayName);
                }
            }
            
            else {
                const pageBreakSolid = `===============================================\n`;
                const pageBreakSoft = `-----------------------------------------------\n`;

                console.log(`${pageBreakSolid}`);
                console.log(`\t\t${artistDisplayName.toUpperCase()}`);
                console.log(`\n${pageBreakSolid}`);
                console.log(`\tSorry it looks like this band`);
                console.log(`\tisnt on tour anytime soon`);
                console.log(`\n${pageBreakSoft}`);
            }
        }
    });
}

function get_concert_input(subject) {
    //If user provides input changes it accordingly
    if(!subject) {
        inquirer.prompt({
            name: "artist",
            type: "input",
            message: "What artist would you like to search for?"
        }).then(function(answer) {
            if(answer.artist !== "") {
                let input = answer.artist.replace(/ /g,"+");
                search_concert(input, answer.artist);
            }

            else {
                console.log("Please enter an artist")
                get_concert_input();
            }
        });
    }

    else {
        if(subject[1]) {            
            search_concert(subject.join("+"), subject.join(" "))
        }

        else if(subject[0] !== undefined) {
            search_concert(subject[0], subject[0])
        }

        else {
            search_concert("watsky", "watsky")
        }
    }
}

module.exports = get_concert_input