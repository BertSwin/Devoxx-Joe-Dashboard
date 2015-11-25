var React = require('react');

var ServicesPanel = React.createClass({
  render: function() {
    return (
      <div className="services-panel">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ServicesPanel;
