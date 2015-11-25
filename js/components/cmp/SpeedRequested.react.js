var React = require('react');
var JoeActions = require('../../actions/JoeActions');
var JoeStore = require('../../stores/JoeStore');

function getSpeedState(guy) {
  return {
    speed: JoeStore.getSpeed(guy)
  };
}

var SpeedRequested = React.createClass({
  getInitialState: function() {
      return getSpeedState(this.props.guy);
  },

  componentDidMount: function() {
    JoeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    JoeStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
          <div className="speed-requested">{this.state.speed} km/h</div>
    );
  },

  _onChange: function() {
    this.setState(getSpeedState(this.props.guy));
  }
});

module.exports = SpeedRequested;
