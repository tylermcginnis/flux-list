var React = require('react');

var List = React.createClass({
  render: function(){
    var items = this.props.items.map(function(item){
      return <li> {item} </li>
    });
    return (
      <ul>
        {items}
      </ul>
    )
  }
});

module.exports = List;