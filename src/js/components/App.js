var React = require('react');
var createReactClass = require('create-react-class');
var SearchForm = require('../components/SearchForm');
var AppStore = require('../stores/AppStores')





function getAppState(){
  return {

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
     var textStyle = {
      textAlign: "center"
    }

    return(
      <div>
         <SearchForm />
      </div>
    )
  },

  _onChange: function(){
    this.setState(getAppState())
  },


});



module.exports = App;
