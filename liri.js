require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var whatToDo = process.argv[2];
var userInput = process.argv[3];

function spotifyThis(){
    spotify
  .search({ type: 'track', query: 'All the Small Things', limit: 5 })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
}

// do this switch for each
switch (whatToDo) {
    case "spotify-this-song":
        spotifyThis()
        break;
    case "concert-this":
        concertThis()
        break;
    case "movie-song":
        movieThis()
        break;
    case "do-what-it-says":
        doWhatItSays()
        break;

}