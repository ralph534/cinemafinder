var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppAction');
var AppStore = require('../stores/AppStores');




var SearchForm = createReactClass({
    render: function(){

    var textStyle = {
      textAlign: "center"
    }

    return(
      <div className="search-form">
         <h1 className="text-center">Seach for A Movie</h1>
         <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" ref="title" placeholder="Enter A Movie Title!!" style={textStyle}/>
            </div>
            <button className="btn btn-primary btn-block">Search Movies</button>
         </form>
      </div>
    )
  },

  onSubmit: function(e){
    e.preventDefault();
    var movie = {
      title: this.refs.title.value.trim()
    }

   AppActions.searchMovies(movie)
  }

})


module.exports = SearchForm;
