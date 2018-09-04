var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppAction');
var AppStore = require('../stores/AppStores');




var MovieResults = createReactClass({
    render: function(){

    var textStyle = {
      textAlign: "center"
    }

    return(
      <div >
       Results
      </div>
    )
  },
})


module.exports = MovieResults;
