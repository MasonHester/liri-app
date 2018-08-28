//bandsInTownAPI.js

//Link to .env
require("dotenv").config();

//npm linking
const request = require("request");

//linking to other files
const keys = require("./keys.js");

const omdbApiKey = keys.omdb.apiKey;

function search_movie(subject) {
    let movieName = "Mr. Nobody"

    if(subject[0]) {
        if(subject[1]) {
            movieName = subject.join(" ");
        }

        else {
            movieName = subject[0];
        }
    }

    queryURL = `http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${movieName}&plot=short`

    request(queryURL, function(err, response, body) {
        if (err && response.statusCode === 200) {
            console.log(`Error: ${err}`);
        }
        else {
            const results = JSON.parse(body);
            const ratingsArray = results.Ratings;
            let rating = "Sorry no Rotten Tomatoes rating was found";
            const pageBreakSolid = `===============================================\n`

            console.log(pageBreakSolid);
            console.log(`\t\t${results.Title}\n`);
            console.log(pageBreakSolid);

            console.log(`\tYear of Release: ${results.year}\n`)
            console.log(`\tIMDB Rating: ${results.imdbRating}\n`);
            ratingsArray.forEach(
                function(element) {                    
                    if(element.Source === "Rotten Tomatoes") {
                        rating = element.Value                        
                    }
                }                
            )
            console.log(`\tRotten Tomatoes Rating: ${rating}\n`);
            console.log(`\tCountry of Production: ${results.Country}\n`);
            console.log(`\tLanguage: ${results.Language}\n`);
            console.log(`\tPlot: ${results.Plot}\n`);
            console.log(`\tActors: ${results.Actors}\n`);
        }
    })
}

module.exports = search_movie;