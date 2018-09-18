//spotify.js

//Link to .env
require("dotenv").config();

//npm linking
const Spotify = require("node-spotify-api");
const inquirer = require("inquirer");

//Links to other files
const keys = require("./keys.js");

const spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

function search_song(subject, _cb) {
    spotify.search({
        type: 'track',
        query: subject,
        limit: 10
    }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        else {
            console.log("Spotify Connection Success")
            let result = data.tracks.items[0];

            const pageBreakSolid = `===============================================\n`;

            let previewURL = `\tNo preview was found`;

            if(result.preview_url) {
                previewURL = result.preview_url;
            }

            console.log(`${pageBreakSolid}`);
            console.log(`\t\t${result.name}`);
            console.log(`\n${pageBreakSolid}`);
            console.log(`\n\tArtist Name:`);
            console.log(`\t\t${result.album.artists[0].name}`);
            console.log(`\n\tPreview URL:`);
            console.log(`\t\t${previewURL}`);
            console.log(`\n\tAlbum Name:`);
            console.log(`\t\t${result.album.name}\n`);

            _cb();
        }        
    });
}

function get_song_input(subject, _cb) {
    if(!subject) {
        inquirer.prompt({
            name: "song",
            type: "input",
            message: "What song would you like to search for?"
        }).then(function(answer) {
            if(answer.song !== "") {
                const input = answer.song.replace(/ /g,"+");
                search_song(input, _cb);
            }

            else {
                console.log("Please enter a song");
                get_song_input(undefined, _cb);
            }
        });
    }

    else {
        if(subject[0] !== undefined) {
            search_song(subject.join(" "), _cb);
        }

        else {
            search_song("The Sign", _cb);
        }
    }
}

module.exports = get_song_input