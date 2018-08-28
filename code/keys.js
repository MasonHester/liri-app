//keys.js

const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

const bandsInTown = {
  apiKey: process.env.BANDS_IN_TOWN_KEY
}

const omdb = {
  apiKey: process.env.OMDB_KEY
}

module.exports = {
  spotify: spotify,
  bandsInTown: bandsInTown,
  omdb: omdb
}