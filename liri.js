require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var whatToDo = process.argv[2];
var userInput = process.argv[3];

// do switch for each
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

  function spotifyThisSong(song){
    spotify.search({ type: 'track', query: song, limit: 1}, function(error, data){
        if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song: " + songData.name);
            console.log("Preview Url: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            } 
        } else {
        console.log('Error occurred.');
        }
    });
    }
  function omdb(movie){
      var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=' + omdbKey + '&plot=short&tomatoes=true';
    
      request(omdbURL, function (error, response, body){
        if(!error && response.statusCode == 200){
          var body = JSON.parse(body);
    
          console.log("Title: " + body.Title);
          console.log("Release Year: " + body.Year);
          console.log("IMdB Rating: " + body.imdbRating);
          console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
          console.log("Country: " + body.Country);
          console.log("Language: " + body.Language);
          console.log("Plot: " + body.Plot);
          console.log("Actors: " + body.Actors);
          
          
        } else{
          console.log('Error occurred.')
        }
          if(movie === "Mr. Nobody"){
            console.log("-----------------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        }
      });
    
    }
    function doThing(){
      fs.readFile('random.txt', "utf8", function(error, data){
        var txt = data.split(',');
    
        spotifyThisSong(txt[1]);
      });
    }