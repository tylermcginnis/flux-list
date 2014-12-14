var ListConstants = require('../constants/ListConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');

var ListActions = {
  addItem: function(data){
    AppDispatcher.handleAction({
      actionType: ListConstants.ADD_ITEM,
      data: data
    });
  },
  removeItem: function(index){
    AppDispatcher.handleAction({
      actionType: ListConstants.REMOVE_ITEM,
      data: index
    })
  }
};

module.exports = ListActions;