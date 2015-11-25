var React = require('react');
var JoeActions = require('../../actions/JoeActions');
var JoeStore = require('../../stores/JoeStore');
var RequestedSpeed = require('./SpeedRequested.react');

function getSpeedState(guy) {
  return {
    speed: JoeStore.getSpeed(guy)
  };
}

var SpeedSlider = React.createClass({
  getInitialState: function() {
      return getSpeedState(this.props.guy);
  },

  componentDidMount: function() {
    JoeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    JoeStore.removeChangeListener(this._onChange);
  },

  updateSpeed: function(event) {
    var speed = event.target.value;
    JoeActions.updateSpeed(speed, this.props.guy);
  },

  render: function() {
    return (
          <div className="speed-slider">
            <input value={this.state.speed} type="range" step="1" min="0" max="60" onChange={this.updateSpeed} />
          </div>
    );
  },

  _onChange: function() {
    this.setState(getSpeedState(this.props.guy));
  }
});

module.exports = SpeedSlider;
