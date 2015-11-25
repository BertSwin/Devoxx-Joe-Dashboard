var React = require('react');
var K8SActions = require('../../actions/K8sActions');

var ServicesPoller = React.createClass({
  componentDidMount: function() {
    (function doPoll(guy, pollingTime){
      K8SActions.fetchInstance(guy);
      setTimeout(function(){
        doPoll(guy, pollingTime);
      }, pollingTime);
    })(this.props.guy, this.props.pollingTime * 1000);
  },

  render: function() {
    return (
      <div>polling every {this.props.pollingTime} seconds for instances</div>
    );
  }
});

module.exports = ServicesPoller;
