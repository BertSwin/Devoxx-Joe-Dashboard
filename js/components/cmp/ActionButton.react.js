var React = require('react');
var JoeStore = require('../../stores/JoeStore');

var ActionButton = React.createClass({
  render: function() {
    return (
      <div className="action-button" onClick={this.props.action}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ActionButton;
