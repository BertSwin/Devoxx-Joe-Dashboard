var React = require('react');
var JoeStore = require('../../stores/JoeStore');
var JoeActions = require('../../actions/JoeActions');

function getRequestedPowerState(guy) {
  return {
    currentPower: JoeStore.getRequestedPower(guy)
  };
}

var RequestedPowerMeter = React.createClass({
  getInitialState: function() {
      return getRequestedPowerState(this.props.guy);
  },

  componentDidMount: function() {
    JoeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    JoeStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="power-meter">
        Requested
        <div className="power-meter__digit">{this.state.currentPower}</div>
        <div className="power-meter__unit"> Watts</div>
      </div>
    );
  },

  _onChange: function() {
    if (this.isMounted()) {
      this.setState(getRequestedPowerState(this.props.guy));
    }
  }
});

module.exports = RequestedPowerMeter;
