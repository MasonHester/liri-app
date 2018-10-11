# liri-app

## Contents
- [Requirements](#requirements)
- [Description](#description)
- [Tools Used](#tools-used)
- [How to Use](#how-to-use)
  - [Setup](#setup)
    - [Using the VM Provided](#using-the-vm-provided)
    - [Not Using the VM Provided](#not-using-the-vm-provided)
- [Options](#options)

## Requirements
- [Nodejs](https://nodejs.org/en/download/ "Install Node")

## Description
This App is meant to utilize exports and npm packages through the CLI to provide information for a wide array of medias

## Tools Used
- Javascript
- NPM
  - [inquirer](https://www.npmjs.com/package/inquirer "Inquirer's NPM page")
  - [moment](https://www.npmjs.com/package/moment "Moment's NPM page")
  - [node-spotify-api](https://www.npmjs.com/package/node-spotify-api "Node-Spotify-Api's NPM page")
  - [request](https://www.npmjs.com/package/request "Request's NPM page")
- Node

## How to Use
### Setup
#### Using the VM Provided
1. If you are new to using VM's check the Ubuntu Vagrant Shell's README found [here](https://github.com/switch120/ubuntu-vagrant-shell)
2. Clone this repo onto your computer
3. Navigate to the VM in your CLI and run `vagrant up`
4. Run `vagrant ssh`
5. Navigate into the code folder and run `npm install`
6. Run `node liri.js`

#### Not Using the VM Provided
1. Clone this repo onto your computer
2. Move the contents of the code folder to your preffered VM
3. Install the dependencies
4. Run `node liri.js` to start the app

## Options:
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