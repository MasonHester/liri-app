require("dotenv").config();
const keys = require("./keys.js");
console.log(keys.spotify);
console.log(keys.bandsInTown.apiKey);

const userInput = process.argv

const action = userInput[2];

const subject = userInput.slice(3).join(" ");

console.log("action: " + action);
console.log("subject: " + subject)