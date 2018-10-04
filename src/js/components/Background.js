var React = require('react');
var createReactClass = require('create-react-class')


var Background = createReactClass({
  componentWillMount:function(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.setState({x:x,y:y});
  },
  render:function(){
    return (
      <div>
          <img className='bg' src={'public/images/redcurtain.jpg'} />
      </div>)
  }
});

module.exports = Background;
