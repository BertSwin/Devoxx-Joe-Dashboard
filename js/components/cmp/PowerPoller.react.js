var React = require('react');
var JoeActions = require('../../actions/JoeActions');

var PowerPoller = React.createClass({
  componentDidMount: function() {
    (function doPoll(guy, pollingTime){
      JoeActions.fetchCurrentPower(guy);
      setTimeout(function(){
        doPoll(guy, pollingTime);
      }, pollingTime);
    })(this.props.guy, this.props.pollingTime * 1000);
  },

  render: function() {
    return (
      <div className="poller">
        Polling every {this.props.pollingTime} seconds..
      </div>
    );
  }
});

module.exports = PowerPoller;
