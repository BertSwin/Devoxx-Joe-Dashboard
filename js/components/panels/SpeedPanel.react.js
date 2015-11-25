var React = require('react');
var SpeedRequested = require('../cmp/SpeedRequested.react');
var SpeedSlider = require('../cmp/SpeedSlider.react');
var Cyclist = require('../cmp/Cyclist.react');

var SpeedPanel = React.createClass({
  render: function() {
    return (
      <div className="speed-panel">
        <SpeedSlider guy={this.props.guy}/>
        <SpeedRequested guy={this.props.guy} />
        <Cyclist guy={this.props.guy}/>
      </div>
    );
  }
});

module.exports = SpeedPanel;
