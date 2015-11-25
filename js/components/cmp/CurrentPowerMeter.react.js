var React = require('react');
var JoeStore = require('../../stores/JoeStore');
var JoeActions = require('../../actions/JoeActions');

function getCurrentPowerState(guy) {
  return {
    currentPower: JoeStore.getCurrentPower(guy)
  };
}

var CurrentPowerMeter = React.createClass({
  getInitialState: function() {
      return getCurrentPowerState(this.props.guy);
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
        Current
        <div className="power-meter__digit">{this.state.currentPower}</div>
        <div className="power-meter__unit"> Watts</div>
      </div>
    );
  },

  _onChange: function() {
    if (this.isMounted()) {
      this.setState(getCurrentPowerState(this.props.guy));
    }
  }
});

module.exports = CurrentPowerMeter;
