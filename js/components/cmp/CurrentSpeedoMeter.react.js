var React = require('react');
var JoeStore = require('../../stores/JoeStore');
var Calculations = require('../../utils/Calculations');

function getCurrentSpeedState(guy) {
  return {
    currentSpeed: Calculations.calculateSpeed(JoeStore.getCurrentPower(guy))
  };
}

var CurrentSpeedoMeter = React.createClass({
  getInitialState: function() {
      return getCurrentSpeedState(this.props.guy);
  },

  componentDidMount: function() {
    JoeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    JoeStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="speedo-meter">
        Current
        <div className="speedo-meter__digit">{this.state.currentSpeed}</div>
        <div className="speedo-meter__unit"> Km/h</div>
      </div>
    );
  },

  _onChange: function() {
    if (this.isMounted()) {
      this.setState(getCurrentSpeedState(this.props.guy));
    }
  }
});

module.exports = CurrentSpeedoMeter;
