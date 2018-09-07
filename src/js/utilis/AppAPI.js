var AppActions = require('../actions/AppAction');
var $ = require('jquery');




module.exports = {
  searchMovies: function(movie){
   $.ajax({
     url: "https://omdb-api.now.sh/?s="+ movie.title,
     dataType: "json",
     cache: false,
     success: function(data){
       AppActions.receiveMovieResults(data.Search);
     },
     error: function(xhr, status, err){
         alert(err);
     }
   })
  }
}
