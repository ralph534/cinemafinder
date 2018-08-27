var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utilis/appAPI')


var CHANGE_EVENT = 'change';


var _movies = [];

var _selected = '';


var AppStore = assign( {}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  }

  addEventListener: function(callback){
    this.on('change', callback)
  }

  removeEventListener: function(callback){
    this.removeListener('change', callback)
  }
})
