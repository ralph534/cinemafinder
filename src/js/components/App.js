var React = require('react');
var createReactClass = require('create-react-class');
var SearchForm = require('../components/SearchForm');
var MovieResults = require('../components/MovieResults');
var Background = require('../components/Background');
var AppStore = require('../stores/AppStores');





function getAppState(){
  return {
     movies: AppStore.getMovieResults()
  }
}





var App = createReactClass({


getInitialState: function(){
  return getAppState();
},



componentDidMount: function(){
  AppStore.addChangeListener(this._onChange);
},

componentWillUnmount: function(){
  AppStore.removeChangeListener(this._onChange);
},









render: function(){



  if(this.state.movies == ''){
    var movieResults = '';
  } else {
    var movieResults = <MovieResults movies={this.state.movies} />
  }
    return(
      <div>
         <SearchForm />
         {movieResults}
      </div>
    )
  },

  _onChange: function(){
    this.setState(getAppState())
  },


});



module.exports = App;
