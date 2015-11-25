var React = require('react');
var Gauge = require('../cmp/Gauge.react');
var CurrentPowerMeter = require('../cmp/CurrentPowerMeter.react');
var RequestedPowerMeter = require('../cmp/RequestedPowerMeter.react');
var CurrentSpeedoMeter = require('../cmp/CurrentSpeedoMeter.react');
var PowerPoller = require('../cmp/PowerPoller.react');
var ActionButton = require('../cmp/ActionButton.react');
var K8SActions = require('../../actions/K8sActions');

var MetricsPanel = React.createClass({
  addOxygen: function addOxygen(event){
    K8SActions.addInstance(this.props.guy);
  },

  reduceOxygen: function reduceOxygen(event){
    K8SActions.removeInstance(this.props.guy);
  },

  render: function() {
    return (
      <div className="metrics-panel">
        <Gauge>
          <RequestedPowerMeter guy={this.props.guy} />
        </Gauge>
        <Gauge>
          <CurrentPowerMeter guy={this.props.guy} />
        </Gauge>
        <Gauge>
          <CurrentSpeedoMeter guy={this.props.guy} />
        </Gauge>
        <ActionButton action={this.addOxygen}>
          <img src="img/add-oxygen.png" />
        </ActionButton>
        <ActionButton action={this.reduceOxygen}>
          <img src="img/reduce-oxygen.png" />
        </ActionButton>
        <PowerPoller pollingTime="1" guy={this.props.guy} />
      </div>
    );
  }
});

module.exports = MetricsPanel;
