//bandsInTownAPI.js

//Link to .env
require("dotenv").config();

//npm linking
const request = require("request");
const moment = require("moment");

//Links to other files
const keys = require("./keys.js");

//loopMod used to limit to 5
function console_log(loopMod, jsonData, artist) {
    const pageBreakSolid = `===============================================\n`;
    const pageBreakSoft = `-----------------------------------------------\n`;

    const titleArray = [
        pageBreakSolid,
        `\t\t` + artist.toUpperCase() + `\n` ,
        pageBreakSolid
    ];

    titleArray.forEach(function(element) {
        console.log(element);
    });

    for (let i = 0; i < loopMod; i++) {
        const bodyArray = [
            '\t' + jsonData[i].venue.name,
            '\t' + jsonData[i].venue.city + ", " + jsonData[i].venue.region,
            '\t' + moment(jsonData[i].datetime).format("YYYY-MM-DD") + '\n',
            pageBreakSoft
        ];

        bodyArray.forEach(function(element) {
            console.log(element);
        });
    }
}

function search_concerts(subject) {
    //Sets default value
    let artist = "watsky";
    let artistDisplayName = "watsky";

    //If user provides input changes it accordingly
    if(subject[0]) {
        if(subject[1]) {
            artist = subject.join("+");
            artistDisplayName = subject.join(" ");
        }

        else {
            artist = subject[0];
            artistDisplayName = subject[0];
        }
    }

    const appID = keys.bandsInTown.apiKey;
    const queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${appID}`;

    request(queryURL, function(err, response, body) {
        //Shows error if there is one
        if (err && response.statusCode === 200) {
            console.log(`Error: ${err}`);
        }

        else {
            console.log(`Bands In Town Connection Success\n`);
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

                const fullArray = [
                    pageBreakSolid,
                    `\t\t` + artistDisplayName.toUpperCase() + `\n`,
                    pageBreakSolid,
                    `Sorry it looks like this band isnt on tour anytime soon\n`,
                    pageBreakSoft
                ]

                fullArray.forEach(function(element) {
                    console.log(element);
                });
            }            
        }        
    });
}

module.exports = search_concerts
