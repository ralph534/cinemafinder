var React = require('react');
var createReactClass = require('create-react-class');
var SearchForm = require('../components/SearchForm');
var AppStore = require('../stores/AppStores')











var App = createReactClass({



    render: function(){

    var textStyle = {
      textAlign: "center"
    }


    return(
      <div style={textStyle}>
         <SearchForm />
      </div>
    )
  },


})



module.exports = App;
