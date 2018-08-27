var React = require('react');
var createReactClass = require('create-react-class');


var App = createReactClass({
    render: function(){

    var textStyle = {
      textAlign: "center"
    }


    return(
      <div style={textStyle}>
         My App
      </div>
    )
  }

})



module.exports = App;
