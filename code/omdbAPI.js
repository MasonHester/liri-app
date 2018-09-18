//bandsInTownAPI.js

//Link to .env
require("dotenv").config();

//npm linking
const request = require("request");
const inquirer = require("inquirer");

//linking to other files
const keys = require("./keys.js");

const omdbApiKey = keys.omdb.apiKey;

function get_movie_input(subject, _cb) {
    if(!subject) {
        inquirer.prompt({
            name: "movie",
            type: "input",
            message: "What movie would you like to search for?"
        }).then(function(answer) {
            if(answer.movie !== "") {
                const input = answer.movie.replace(/ /g,"+");
                search_movie(input, _cb);
            }

            else {
                console.log("Please enter a song");
                get_movie_input(undefined, _cb);
            }
        });
    }

    else {
        if(subject[0] !== undefined) {
            search_movie(subject[0].join(" "), _cb);
        }

        else {
            search_movie("Mr. Nobody", _cb);
        }
    }
}

function search_movie(subject, _cb) {
    console.log(subject);
    queryURL = `http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${subject}&plot=short`

    request(queryURL, function(err, response, body) {
        if (err && response.statusCode === 200) {
            console.log(`Error: ${err}`);
        }
        else {
            const results = JSON.parse(body);
            
            if (results.Response === "False") {
                console.log(`No movie was found by that name\n`)
                _cb();
            }

            else {
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

                _cb();
            }
        }
    })
}

module.exports = get_movie_input;