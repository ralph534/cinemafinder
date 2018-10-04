var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppAction');
var AppStore = require('../stores/AppStores');




var Movie = createReactClass({
    render: function(){

      var movieSec = {
          width: '100%',
          margin: "10px",
          background: "#f4f4f4",
          padding: '40px',
          border: '1px #ccc solid',
          borderRadius: '45px',
        }

        var link = 'http://www.imdb.com/title/'+this.props.movie.imdbID;

    return(
      <div className="well" style={movieSec}>
         <div className="row">
             <div className="col-md-4">
               <img className="thumbnail" src={this.props.movie.Poster} style={{width: '100%'}} />
             </div>
             <div className="col-md-8">
               <h4>{this.props.movie.Title}</h4>
               <ul className="list-group">
                 <li className="list-group-item">Year Released: {this.props.movie.Title}</li>
                   <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
               </ul>
               <a className="btn btn-primary" href={link}>View On IMDB</a>
             </div>
         </div>
      </div>
    )
  },
})


module.exports = Movie;
