var React = require('react');

var Gauge = React.createClass({
  render: function() {
    return (
      <div className="gauge">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Gauge;
