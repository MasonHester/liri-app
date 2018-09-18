//doWhatItSays.js

//Link to .env
require("dotenv").config();

//linking to fs
const fs = require("fs");

function do_what_it_says(callback, _cb) {
    fs.readFile("random.txt".toString(), 'utf-8', function(err, data) {
        if(err) return callback(err);

        const tempArray = [undefined, undefined];

        const dataArray = data.split(",");

        const subject = dataArray.pop().replace(/"/g,"").split(" ");
        
        const inputArray = tempArray.concat(dataArray).concat(subject);

        callback(null, inputArray);
    });
}

module.exports = do_what_it_says