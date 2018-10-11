# liri-app

## Description
This App is meant to utilize exports and npm packages through the CLI to provide information for a wide array of medias

### Tools used
- Javascript
- NPM
  - [inquirer](https://www.npmjs.com/package/inquirer "Inquirer's NPM page")
  - [moment](https://www.npmjs.com/package/moment "Moment's NPM page")
  - [node-spotify-api](https://www.npmjs.com/package/node-spotify-api "Node-Spotify-Api's NPM page")
  - [request](https://www.npmjs.com/package/request "Request's NPM page")
- Node

### How to use:
- Spin up a VM, Heres a link to one if needed:
 - https://github.com/switch120/ubuntu-vagrant-shell
- Clone the repo, If using the ubuntu clone it into the code folder
- Navigate to the files and run `npm install` in the CLI

### Options:
All of these commands should be run in the CLI, CTRL + C can exit if needed
Variables in between the |'s are placeholders, do not include the |'s in the search

- `node liri.js`
 - This is the main way to interact with the app. This will present you with a list of options for searching
- `node liri.js concert-this |artist name|`
 - This will allow you to search for concerts for a band using the Bands In Town API
  - Bands in Town API Link: http://www.artists.bandsintown.com/bandsintown-api
- `node liri.js spotify-this-song |song name|`
 - This will allow you to search for a song through the Spotify Api
  - Spotify API Link: https://developer.spotify.com/documentation/web-api/
- `node liri.js movie-this |movie name|`
 - This will allow you to get info for a movie through the OMDB API
  - OMDB API Link: http://www.omdbapi.com/
- `node liri.js do-what-it-says`
 - This will read a txt file and run the search on it
  - must be formatted as |action|,"|subject|"
  - Example: `concert-this,"The Rolling Stones"`