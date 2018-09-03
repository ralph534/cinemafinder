var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstant');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utilis/appAPI')


var CHANGE_EVENT = 'change';


var _movies = [];

var _selected = '';


var AppStore = assign( {}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addEventListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeEventListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
})

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch (action.actionType) {
      case AppConstants.Search_Movies:
      console.log('searching for a movie ' + action.movie.title);
      AppStore.emit(CHANGE_EVENT);
      break;

  }
  return true;
})

module.exports = AppStore;
