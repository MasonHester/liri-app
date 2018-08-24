//liri.js

//Link to .env
require("dotenv").config();

//Links to other files
const keys = require("./keys.js");
    
const search_concerts = require("./bandsInTownAPI.js");


console.log(keys.spotify);
console.log(keys.bandsInTown.apiKey);

const userInput = process.argv

const action = userInput[2];

const subject = userInput.slice(3).join(" ");


console.log("action: " + action);
console.log("subject: " + subject)

if(action === "concert-this"){
    search_concerts(subject);
}
