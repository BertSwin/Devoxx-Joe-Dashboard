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
      <div className="joe-page">
        <Navigation />
        <MetricsPanel guy="joe" />
        <SpeedPanel guy="joe" />
        <ServicesPanel>
          <Service type="normal" />
          <ServicesPoller pollingTime="1" guy="joe" />
        </ServicesPanel>
      </div>
    );
  }
});

module.exports = JoePage;
