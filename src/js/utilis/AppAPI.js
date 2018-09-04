var AppStore = require('../stores/AppStores');
var AppActions = require('../actions/AppAction');
var $ = require('jquery');
var json = require('jquery');

var data = require('jquery');



module.exports = {
  searchMovies: function(movie){
   $.ajax({
     url: "https://omdb-api.now.sh/?s="+ movie.title,
     dataType: "json",
     cache: false,
     success: function(data){
       AppActions.receiveMovieResults(data.Search);
     }.bind(this),
     error: function(xhr, status, err){
         alert(err);
     }.bind(this)
   })
  }
}
