var AppDispatcher = require('../dispatchers/AppDispatcher');
var ListConstants = require('../constants/ListConstants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var _items = ['test'];

var addItem = function(item){
  _items.push(item);
};

var removeItem = function(index){
  _items.splice(index, 1);
};

var ListStore = merge(EventEmitter.prototype, {
  getItems: function(){
    return _items;
  },
  emitChange: function(){
    this.emit('change');
  },
  addChangeListener: function(cb){
    this.on('change', cb);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case ListConstants.ADD_ITEM :
      addItem(action.data);
      break;
    case ListConstants.REMOVE_ITEM :
      removeItem(action.data);
      break;
    default:
     return true;
  };
  ListStore.emitChange();

  return true;
})

module.exports = ListStore;