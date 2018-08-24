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
    const pageBreakSolid = `===============================================\n`
    const pageBreakSoft = `-----------------------------------------------\n`

    console.log(pageBreakSolid);
    console.log(`\t\t` + artist.toUpperCase() + `\n`);
    console.log(pageBreakSolid);

    for (let i = 0; i < loopMod; i++) {            
        console.log('\t' + jsonData[i].venue.name);
        console.log('\t' + jsonData[i].venue.city + ", " + jsonData[i].venue.region);
        console.log('\t' + moment(jsonData[i].datetime).format("YYYY-MM-DD") + '\n');
        console.log(pageBreakSoft);
    }
}

function search_concerts(artist) {
    const appID = keys.bandsInTown.apiKey;
    const URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${appID}`;

    request(URL, function(err, response, body) {
        //Shows error if there is one
        if (error && response.statusCode === 200) {
            console.log(`Error: ${error}`);
        }

        else {
            //Manipulates data for use
            const initial = JSON.stringify(body);
            const stringified = JSON.parse(initial)
            const jsonData = JSON.parse(stringified);
            
            if(jsonData.length < 5) {
                if(jsonData.length) {
                    console_log(jsonData.length, jsonData, artist);                              
                }

                else {
                    console.log("Nothing was found, sorry");
                }
            }

            else {
                console_log(5, jsonData, artist);
            }
        }        
    });
}

module.exports = search_concerts
