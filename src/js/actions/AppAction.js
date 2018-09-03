var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstant');


var AppActions = {
    searchMovies: function(movie){
      console.log('searching for a movie ' + movie.title)
      AppDispatcher.handleViewAction({
        actionType: AppConstants.Search_Movies,
        movie: movie
      })
    }
}


module.exports = AppActions;
