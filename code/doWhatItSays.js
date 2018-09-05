//doWhatItSays.js

//Link to .env
require("dotenv").config();

//linking to fs
const fs = require("fs");

function do_what_it_says(callback) {
    fs.readFile("random.txt".toString(), 'utf-8', function(err, data) {
        if(err) return callback(err);

        const tempArray = [" "," "];

        const dataArray = data.split(",");

        const inputArray = tempArray.concat(dataArray);

        callback(null, inputArray);
    });
}

module.exports = do_what_it_says

// module.exports = {
//     parseFile: function(file_path, callback) {
//         fs.readFile(file_path.toString(), 'utf-8', function(err, data) {
//             if (err) return callback(err);
//             callback(null, data);
//         });
//     }
// }

// let tempInput;

// function do_what_it_says() {
//     fs.readFile("random.txt".toString(), "utf8", function(error, data) {
//         if(error) {
//             console.log(error);
//             return;
//         }

//         const tempArray = [" "," "];

//         const dataArray = data.split(",");

//         const inputArray = tempArray.concat(dataArray);
//     });
// }

// function extract_data(input) {
//     console.log(input);

//     tempInput = input;
// }

// //console.log(do_what_it_says())

// module.exports = {
//     do_what_it_says: do_what_it_says,
//     extract_data: extract_data,
//     tempInput: tempInput
// }