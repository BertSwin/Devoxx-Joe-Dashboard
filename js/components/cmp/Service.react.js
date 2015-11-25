var React = require('react');
var ServiceInstance = require('../cmp/ServiceInstance.react');
var K8SStore = require('../../stores/k8sStore');

function getInstanceCount(type) {
  return {
    instanceCount: K8SStore.getInstanceCount(type)
  }
}

var Service = React.createClass({
  getInitialState: function() {
      return getInstanceCount(this.props.type);
  },
  componentDidMount: function() {
    K8SStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    K8SStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var serverInstances = [];

    for (var i = 0; i < this.state.instanceCount; i++) {
      serverInstances.push(
        <ServiceInstance type={this.props.type} key={i}>
          <img src="img/oxygen.png" />
        </ServiceInstance>
      );
    }

    return (
      <div id="{this.props.type}" className="service">
        {serverInstances}
      </div>
    );
  },

  _onChange: function() {
    this.setState(getInstanceCount(this.props.type));
  }
});

module.exports = Service;
