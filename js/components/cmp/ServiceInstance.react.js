var React = require('react');

var ServiceInstance = React.createClass({
  render: function() {
    var cssClass = 'service-instance service-instance--' + this.props.type;
    return (
      <div className={cssClass}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ServiceInstance;
