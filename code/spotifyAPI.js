//spotify.js

//Link to .env
require("dotenv").config();

//npm linking
const Spotify = require("node-spotify-api");

//Links to other files
const keys = require("./keys.js");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

function search_song(subject) {
    let songName = "The Sign"
    console.log(subject[0])

    if(subject[0]) {
        if(subject[1]) {
            songName = subject.join(" ");
        }

        else {
            songName = subject[0];
        }
    }

    spotify.search({
        type: 'track',
        query: songName,
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
                previewURL = `\t` + result.preview_url;
            }

            const fullArray = [
                pageBreakSolid,
                `\t` + result.name + `\n`,
                pageBreakSolid,
                `\nArtist Name:\n`,
                `\t` + result.album.artists[0].name,
                `\nPreview URL:\n`,
                previewURL,
                `\nAlbum Name:\n`,
                `\t` + result.album.name
            ];

            fullArray.forEach(function(fullPiece) {
                console.log(fullPiece);
            });
        }        
    });
}

module.exports = search_song