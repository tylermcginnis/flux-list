var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {txt: ''}
  },
  handleChange: function(e){
    this.setState({txt: e.target.value})
  },
  submit: function(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.txt);
    this.setState({txt: ''});
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.handleChange}/>
        <button onClick={this.submit} />
      </div>
    )
  }
});

module.exports = AddItem;