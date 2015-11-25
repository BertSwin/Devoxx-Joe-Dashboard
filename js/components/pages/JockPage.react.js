var React = require('react');
var Navigation = require('../cmp/Navigation.react');
var SpeedPanel = require('../panels/SpeedPanel.react');
var MetricsPanel = require('../panels/MetricsPanel.react');
var ServicesPanel = require('../panels/ServicesPanel.react');
var Service = require('../cmp/Service.react');
var ServicesPoller = require('../cmp/ServicesPoller.react');

var JoePage = React.createClass({
  render: function() {
    return (
      <div className="jock-page">
        <Navigation />
        <MetricsPanel guy="jock" />
        <SpeedPanel guy="jock" />
        <ServicesPanel>
          <Service type="premium" />
          <ServicesPoller pollingTime="1" guy="jock" />
        </ServicesPanel>
      </div>
    );
  }
});

module.exports = JoePage;
