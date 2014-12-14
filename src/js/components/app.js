var React = require('react');
var ListActions = require('../actions/ListActions');
var ListStore = require('../stores/ListStore');
var List = require('../components/List');
var AddItem = require('../components/AddItem');

var App = React.createClass({
  getInitialState: function(){
    return {items: ListStore.getItems()};
  },
  componentDidMount: function(){
    ListStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    ListStore.removeChangeListener(this._onChange);
  },
  addItem: function(item){
    ListActions.addItem(item);
  },
  handleRemove: function(){
    ListActions.removeItem();
  },
  render: function(){
    return (
      <div>
      efsf
        <List items={this.state.items} />
        <AddItem handleSubmit={this.addItem}/>
      </div>
    )
  },
  _onChange: function(){
    this.setState({items: ListStore.getItems()});
  }
});

module.exports = App;