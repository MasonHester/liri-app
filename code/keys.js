console.log('this is loaded');

const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

const bandsInTown = {
  apiKey: process.env.BANDS_IN_TOWN_KEY
}

module.exports = {
  spotify: spotify,
  bandsInTown: bandsInTown
}